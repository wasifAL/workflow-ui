import {Component, OnInit} from '@angular/core';
import {StagePayload} from '../stage/stage.payload';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StageActorPayload} from './stageActor.payload';
import {StageService} from '../shared/stage.service';
import {ToastrService} from 'ngx-toastr';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {StageActorService} from '../shared/stage-actor.service';
import {UserPayload} from '../user/user.payload';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-stageactor',
  templateUrl: './stageactor.component.html',
  styleUrls: ['./stageactor.component.css']
})
export class StageactorComponent implements OnInit {
  stageActors: Array<StageActorPayload> = [];
  stages: Array<StagePayload> = [];
  employees: Array<UserPayload> = [];
  stageActorForm: FormGroup;
  stageActor: StageActorPayload;

  constructor(private stageActorService: StageActorService, private userService: UserService, private stageService: StageService, private toaster: ToastrService, private modalService: NgbModal,
              private config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.stageActor = {
      id: 0,
      name: '',
      description: '',
      stageId: 0,
      stageName: '',
      employeeId: 0,
      employeeDetails: ''
    };
  }

  ngOnInit(): void {
    // get all stages list from server
    this.stageService.getAllStages().subscribe(stages => {
      this.stages = stages;
    });
    // get all employees list from server
    this.userService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });

    this.stageActorService.getAllStageActors().subscribe(stageActors => {
      this.stageActors = stageActors;
    });
    this.stageActorForm = new FormGroup({
      name: new FormControl('', Validators.required),
      stage: new FormControl('', Validators.required),
      employee: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  // tslint:disable-next-line:typedef
  create() {
    this.stageActor.name = this.stageActorForm.get('name').value;
    this.stageActor.description = this.stageActorForm.get('description').value;
    this.stageActor.stageId = this.stageActorForm.get('stage').value.id;
    this.stageActor.employeeId = this.stageActorForm.get('employee').value.id;

    this.stageActorService.create(this.stageActor).subscribe(() => {
      this.toaster.success('Stage Actor Created Successful');
      window.location.reload();
    }, () => {
      this.toaster.error('Error in Stage Actor Creation');
    });
  }

  // modal action open
  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {centered: true});
  }

  // modal action close
  // tslint:disable-next-line:typedef
  onClose(modal) {
    modal.close();
  }

}
