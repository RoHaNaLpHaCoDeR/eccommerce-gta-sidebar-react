import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <>
    <div className='cards' id = "products">
    <div className="heading_style">
      <h1> Choose the Gang Outfits you Want!!</h1>
    </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              title = 'VAGOS'
              src= 'images/vagos.png'
              text='The Vagos are a large and powerful Mexican Los Santos street gang that sport yellow bandanas, and occupy a majority of the far North and East areas of Los Santos, namely Las Colinas, East Beach, and Los Flores.'
              label='VAGOS'
              path='/products/vagos'
            />
            <CardItem
              title='Groove Street Family'
              src='images/gsf.jpg'
              text='The Grove Street Families are a black/Afro-American street gang in Los Santos and used to be the most powerful gang in Los Santos but have been silenced over the past few years by drugs, internal disagreements and their sworn enemies, the Ballas.'
              label='GSF'
              path='/products/gsf'
            />
            <CardItem
              title='Varrios Loz Aztecas'
              src='images/losaztecas.jpg'
              text='A small-time Latin/Mexican Los Santos street gang based in the barrios of El Corona and Little Mexico in addition to Unity Station - a popular meeting spot for the Aztecas, distinctly recognised by their turquoise bandanas.'
              label='VLA'
              path='/products/vla'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              title='BALLAS'
              src='images/ballas.jpg'
              text='The Ballas are the largest and most powerful black/afro-American street gang in Los Santos and have a bitter rivalry with the Grove Street Families. The Ballas come in Four sets - Front Yard Ballas, Rollin Heights Ballas, Kilo Tray Ballas and the Temple Drive Ballas.'
              label='BALLAS'
              path='/products/ballas'
            />
            <CardItem
              title = 'RED MAFIA'
              src='images/redmafia.jpg'
              text='Three Liberty City based Italian mob families operate in Las Venturas, and each of them have a stake in Caligulas Casino The Sindacco Family want to do business with the Leones and this involves Salvatore pledging million dollars to the Sindaccos'
              label='Red Mafia'
              path='/products/redmafia'
            />
            <CardItem
              title = 'Madrazo Cartels'
              src='images/madrazocartels.jpg'
              text='The Madrazo cartels are a Vietnamese street gang based in San Fierro, preparing a full move to the United States. They control the dockland/bay area in Easter Basin and parts of Esplanade North often causing violent disturbance. They are currently at a major war with the San Fierro Triads.'
              label='MC'
              path='/products/mc'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
