import { Component, OnInit } from '@angular/core';
import {Resource} from '../../common/resource';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  resources: Resource[];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.listResources();
  }

  listResources() {
    this.resourceService.getResourceList().subscribe(
      data => {
        this.resources = data;
      }
    );
  }

}
