import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter  } from '@angular/core';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-notes-cart',
  templateUrl: './notes-cart.component.html',
  styleUrls: ['./notes-cart.component.scss']
})
export class NotesCartComponent implements OnInit {

  @Input() title:string;
  @Input() body:string;

  @Input() link:string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  
  @ViewChild('truncator',{static: true}) truncator:ElementRef<HTMLElement>
  @ViewChild('bodytext',{static: true}) bodytext:ElementRef<HTMLElement>

  constructor(private render: Renderer2, private noteService: NoteService) { }

  ngOnInit() {

    // work out if there it a text is overflow  

    let  style = window.getComputedStyle(this.bodytext.nativeElement,null)
    let viewableheight = parseInt(style.getPropertyValue('height'),10);

    if(this.bodytext.nativeElement.scrollHeight > viewableheight){
      // if there is no text overflow
      this.render.setStyle(this.truncator.nativeElement,'display','block')
    }else{
      this.render.setStyle(this.truncator.nativeElement,'display','none')
    }

  }

  remove(){
    this.deleteEvent.emit();
  }

}
