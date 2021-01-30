import { Component, OnInit } from '@angular/core';
import { PeopleApiService } from '../../services/people-api.service';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  //variable is holding all return data from api
  personsData: any[];
  //varibale for input search for 2way binding
  word: string = '';

  constructor(private _PeopleApiService: PeopleApiService) {
    this.searchPeople();
  }
  ngOnInit(): void {}

  //retiriveAllPeople method
  retiriveAllPeople() {
    this._PeopleApiService.getPeopleData().subscribe(
      (response) => {
        this.personsData = response.results;
        console.log(this.personsData);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //retreive search of all characters for the specific word
  searchPeople() {
    this._PeopleApiService.searchAllPeople(this.word).subscribe(
      (response) => {
        this.personsData = response.results;
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //search method after user write his search in input
  search() {
    if (this.word != '') {
      this.searchPeople();
      this.personsData = this.personsData.filter((result) => {
        return result.name.toLowerCase().match(this.word.toLowerCase());
      });
    } else if (this.word == '') {
      this.retiriveAllPeople();
    }
  }
}
