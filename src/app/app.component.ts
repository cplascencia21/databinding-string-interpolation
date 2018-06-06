import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{heading}}</h2>
    <p>
      Name: {{person.sex === 'm' ? 'Mr' : 'Ms'}}
      {{person.name.first + ' ' + person.name.surname}}
    </p>
    <p>City: {{person.city}}</p>`
})
export class PersonComponent {

  heading = 'Person Details';

  person: any = {
    name: {
      first: 'Carlos',
      surname: 'Plascencia'
    },
    sex: 'm',
    city: 'Madera'
  };
}
