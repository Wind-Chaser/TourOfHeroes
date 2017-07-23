import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes=[
      {id:0,name:'Zero'},
      {id:11,name:'Shubham'},
      {id:12,name:'Nikhil'},
      {id:13,name:'Rahul'},
      {id:14,name:'Sahil'},
      {id:15,name:'Gaurav'},
      {id:16,name:'Amit'}
    ];
    return  {heroes};
  }
}
