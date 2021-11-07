import CarItem from './components/carItem';
import './App.css';
import Movie from './components/movie';



let cars = [
  {
    CarYear: 2011,
    CarModel: 'k1',
    CarType: 'Bmw',

  }
]

function App() {
  return (
    <div className="App">
    <CarItem year = {2020} CarModel={'Mercdes'} CarType = {'A3'}/>
    <CarItem year = {2019} CarModel={'Bmw'} CarType ={'F2'}/>
    <CarItem year = {2018} CarModel={'Renault'} CarType={'g5'}/>
    <CarItem year = {2017} CarModel={'Audi'} CarType={'h9'}/>
    <CarItem CarYear ={cars[0].CarYear} CarModel ={cars[0].CarModel} CarType={cars[0].CarType} />
    <Movie Film = {'Indipendence'} Year = {1997} Produce= {'Lorem'} />
    <Movie Film = {'Big Mamas House'} Year = {2000} Produce= {'Lorem'} />
    <Movie Film = {'Wedding Planer'} Year = {2010} Produce= {'Lorem'} />
    <Movie Film = {'King of the Lion'} Year = {1985} Produce= {'Lorem'} />
    </div>
  );
}

export default App;
