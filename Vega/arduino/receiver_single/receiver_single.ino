//Include Libraries
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

// Create an RF24 object
RF24 radio(9, 8);  // CE, CSN

// Radio constants
const byte address[6] = "00001";
const short pipe = 0;

// LED constants
unsigned int animationDelay = 500;
unsigned int lastUpdatedTime = 0;

void setup()
{  
  radio.begin();
  
  // Set the address
  radio.openReadingPipe(0, address);
  
  //Set module as receiver
  radio.startListening();

  
}

void loop()
{
  char text[32] = {0};
  //Read the data if available in buffer
  if (radio.available()) 
  {    
    radio.read(&text, sizeof(text));
  }

  if (millis - lastUpdatedTime > animationDelay) 
  {    
    nextFrame(); 
  }  
}


void nextFrame() {
  
}
