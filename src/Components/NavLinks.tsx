import Home from "../Routes/Home";
import Profile from "../Routes/Profile";
import Projects from "../Routes/Projects";

class NavLink {
  id: number;
  url: string;
  name: string;
  component:()=>JSX.Element;

  constructor(id:number, url:string, name:string, component: ()=>JSX.Element) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.component = component;
  };
};

function NavLinks() {
  return [
    new NavLink(0,'/','Home', Home),
    new NavLink(1,'/profile','Profile', Profile),
    new NavLink(2,'/projects','Projects', Projects)
  ];
};


export default NavLinks;