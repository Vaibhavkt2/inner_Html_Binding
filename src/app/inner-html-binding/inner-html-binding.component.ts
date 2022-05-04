import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-html-binding',
  templateUrl: './inner-html-binding.component.html',
  styleUrls: ['./inner-html-binding.component.css']
})
export class InnerHtmlBindingComponent implements OnInit {
  htmlSnippet='Template <script>alert("danger")</script><b>syntax</b>';

  constructor() { }

  ngOnInit(): void {
  }

}
