import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Note } from "../../shared/model";
import { NoteService } from 'src/app/shared/note.service';
import { Router, ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  constructor(private noteService: NoteService, private route: Router,private rout: ActivatedRoute) { }

  note:Note;
  noteId:number;

  new:boolean;
  
  ngOnInit() {
   this.rout.params.subscribe((param: Params) => {
    this.note = new Note()
      if(param.id){
       this.note = this.noteService.get(param.id)
       this.noteId = param.id
       this.new = false
      }
      else{
        this.new = true
      }
   })
  }

  onSubmit(form:NgForm){
    if (this.new){
      this.noteService.add(form.value)
    }else{
      this.noteService.update(this.noteId,form.value.title,form.value.body)
    }
    this.route.navigate(['/'])
  }  
}
