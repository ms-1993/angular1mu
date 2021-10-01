import {Group} from "./group";
import {Role} from "./role";

export class User {
  id:number=0;
  username:string='';
  email:string='';
  password:string='';
  is_staff:boolean=false;
  groups: Group[] = [];
  role:Role[] = [];
}
