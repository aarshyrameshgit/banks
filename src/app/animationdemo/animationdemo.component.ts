import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations: [ trigger('openClose',[
                state('open',style({
                  height:'500px',
                  backgroundColor:'lightgreen'
                }
                )),
                state('close',style({
                  height:'250px',
                  backgroundColor:'red'
                }
                )),
     transition('open=>close',[
       animate ('2s')
     ]),
     transition('close=>open',[
      animate ('1s')
    ])
  ])
]
})
export class AnimationdemoComponent implements OnInit {


  isOpen =true
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
this.isOpen = !this.isOpen
  }

}
