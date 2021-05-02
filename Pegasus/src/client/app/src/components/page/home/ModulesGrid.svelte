<script>
    import Module from './Module.svelte';
    import MediaQuery from '../../layout/MediaQuery.svelte';
    import { onMount } from 'svelte';
    let modules = []
    
    onMount(async () => {
        await fetch('http://localhost:8080/get_modules')
        .then(r => r.json())
        .then(data => {
            modules = data;
        });
    })
</script>

<style lang="scss">
    grid {
        @media screen and (min-width: 600px) {
            margin-top: 3 * $gap;
            @include infinite-grid($row-size: 23rem, $columns: repeat(2, 34rem), $grid-gap: $gap);
        }
        @media screen and (min-width: 1440px) {
            margin-top: 2 * $gap;
            @include infinite-grid($row-size: 23rem, $columns: repeat(3, 34rem), $grid-gap: $gap);
        }
    }
    flexlist {
        padding: $gap;
        @include flexbox($direction: column, $align-perp: stretch);
    }
    info {
        grid-column: 1 / 5;
        grid-row: 2 / 3;
    }
</style>

<MediaQuery query="(max-width: 599px)">
    <flexlist>
        {#each modules as module}
            <Module {...module} mobile=true/>
        {/each}
    </flexlist>
</MediaQuery>
<MediaQuery query="(min-width: 600px)">
    <grid>
        {#each modules as module}
            <Module {...module}/>
        {:else}
            <info class="t-1 ts-2 medium">There doesn't appear to be any modules running</info>
        {/each}
    </grid>
</MediaQuery>