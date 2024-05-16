
import './App.css';
import HolidayCard from './HolidayCard/irctcholidayCard';

function App() {
  return (
    <div >
      <div>
     <h1 style={{textAlign:"center"}}><u>Holiday Card </u></h1>
     <div style={{display:"flex" , flexWrap:"wrap" , gap:"20px"}}>
    
      
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/exterior.jpg'
                         alt='Maharajas Express'
                     heading="Mharajas Express"
                         para="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World "
                     paraLink="https://www.the-maharajas.com/"
      /> 
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/Thailand.jpg'
                         alt='International Packages'
                     heading="International Packages"
                         para="Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience."
                     paraLink="https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All"
      /> 
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/Kashmir.jpg'
                         alt='Domestic Packages'
                     heading="Domestic Packages"
                         para="Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!"
                     paraLink="https://www.irctctourism.com/"
      /> 
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg'
                         alt='Bharat Gaurav Tourist Train'
                     heading="Bharat Gaurav Tourist Train"
                         para="IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days."
                     paraLink="https://www.irctctourism.com/bharatgaurav"
      /> 
        <HolidayCard imgLink= 'https://www.irctc.co.in/nget/assets/images/Manali.jpg'
                         alt='Rail Tour Packages'
                     heading="Rail Tour Packages"
                         para="IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available."
                     paraLink="https://www.irctctourism.com/#/tourpkgs"
      /> 
        </div> 
     </div>

    </div>
  );
}

export default App;
