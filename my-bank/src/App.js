import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import NavBar from './component/Home/NavBar';
import Login from './component/Home/login/Login';
import ContactUs from './component/Home/contactus/ContactUs';
import Register from './component/Home/register/Register';
import makeLoan from './component/bank/makeLoan';
import TransactionList from './component/bank/TransactionList';
import adminLogin from './component/admin/adminLogin';
import adminSideBar from './component/admin/adminSideBar';
import adminHome from './component/admin/adminHome';
import LoanAproval from './component/admin/LoanAproval';
// import LoanDelete from './component/admin/LoanDelete';
import LoanCreate from './component/admin/LoanCreate';
import LoanEdit from './component/admin/LoanEdit';
import PostNews from './component/admin/PostNews';
import payment from './component/bank/payment';
import AboutUs from './component/Home/AboutUs';
import TransactionSuccesful from './component/bank/TransactionSuccesful';
import PageNotFound from './component/PageNotFound';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path exact ="/" component={Home}/>
        <Route path="/NavBar" component={NavBar}/>
        <Route path="/Login" component={Login}/>
        <Route path="/ContactUs" component={ContactUs}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/Register" component={Register}/>
        <Route path="/makeLoan" component={makeLoan}/>
        <Route path="/TransactionList" component={TransactionList}/>
        <Route path="/adminLogin" component={adminLogin}/>
        <Route path="/adminSideBar" component={adminSideBar}/>
        <Route path="/adminHome" component={adminHome}/>
        <Route path="/LoanAproval" component={LoanAproval}/>
        {/* <Route path="/LoanDelete" component={LoanDelete}/>  */}
        <Route path="/LoanCreate" component={LoanCreate}/>
        <Route path="/LoanEdit/:cid" component={LoanEdit}/> 
        <Route path="/PostNews" component={PostNews}/>
        <Route path="/payment" component={payment}/>
        <Route path="/TransactionSuccesful" component={TransactionSuccesful}/>
        <Route component={PageNotFound}/>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
