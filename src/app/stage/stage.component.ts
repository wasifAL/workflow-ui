import {Component, OnInit, Type, ViewChild} from '@angular/core';
import {StagePayload} from './stage.payload';
import {StageService} from '../shared/stage.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../auth/shared/auth.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})

export class StageComponent implements OnInit {
  stages: Array<StagePayload> = [];
  stageForm: FormGroup;
  stageModel: StagePayload;


  constructor(private stageService: StageService, private authService: AuthService, private toaster: ToastrService, private modalService: NgbModal,
              private config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.stageModel = {
      id: 0,
      name: '',
      seq: 0,
      description: '',
      nextStageID: 0,
      nextStageName: '',
      prevStageID: 0,
      prevStageName: ''
    };
  }

  ngOnInit(): void {
// get all stages list from server
    this.stageService.getAllStages().subscribe(stages => {
      this.stages = stages;
    });
    this.stageForm = new FormGroup({
      name: new FormControl('', Validators.required),
      seq: new FormControl('', Validators.required),
      description: new FormControl(''),
      nextStage: new FormControl(''),
      prevStage: new FormControl('')
    });
  }

  // tslint:disable-next-line:typedef
  create() {
    this.stageModel.name = this.stageForm.get('name').value;
    this.stageModel.description = this.stageForm.get('description').value;
    this.stageModel.seq = this.stageForm.get('seq').value;
    this.stageModel.nextStageID = this.stageForm.get('nextStage').value.id;
    this.stageModel.prevStageID = this.stageForm.get('prevStage').value.id;

    this.stageService.create(this.stageModel).subscribe(() => {
      this.toaster.success('Stage Created Successful');
      window.location.reload();
    }, () => {
      this.toaster.error('Error in Stage Creation');
    });
  }

  // modal action open
  // tslint:disable-next-line:typedef
  open(content) {
    if (this.authService.getRole() != 'USER') {
      this.modalService.open(content, {centered: true});
    } else {
      this.toaster.error('Only admins are allowed to create stage');
    }
  }

  // modal action close
  // tslint:disable-next-line:typedef
  onClose(modal) {
    modal.close();
  }
}
