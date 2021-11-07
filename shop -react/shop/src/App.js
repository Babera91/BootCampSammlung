import Shop from './components/shop';
import './App.css';


let arry = [
  {
      imgURL : 'https://unsplash.it/200',
      Item : 'flux',
      Price : '200 $',

  },
  {
      imgURL : 'https://unsplash.it/300',
      Item : 'Rolex',
      Price : '300 $',
  },
  {
      imgURL : 'https://unsplash.it/400',
      Item : 'fuxi',
      Price : '100 $',
  }
]


function App() {
  return (
    <div className="App">
      <Shop img={arry[0].imgURL} Name = {arry[0].Item} Dollar = {arry[0].Price}/>
      <Shop img={arry[1].imgURL} Name = {arry[1].Item} Dollar = {arry[1].Price}/>
      <Shop img={arry[2].imgURL} Name = {arry[2].Item} Dollar = {arry[2].Price}/>
    </div>
  );
}

export default App;
