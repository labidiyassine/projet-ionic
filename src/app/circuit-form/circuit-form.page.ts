import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CircuitService } from '../circuit.service';

@Component({
  selector: 'app-circuit-form',
  templateUrl: './circuit-form.page.html',
  styleUrls: ['./circuit-form.page.scss'],
})
export class CircuitFormPage implements OnInit {
  circuitForm: FormGroup;
  circuitId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private circuitService: CircuitService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.circuitForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      length: ['', [Validators.required, Validators.min(0)]],
      type: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.circuitId = this.route.snapshot.paramMap.get('id');
    if (this.circuitId) {
      this.loadCircuit(this.circuitId);
    }
  }

  loadCircuit(id: string) {
    this.circuitService.getCircuitById(id).subscribe(
      (data: any) => {
        if (data && data.fields) {
          this.circuitForm.patchValue({
            name: data.fields.name.stringValue || '',
            description: data.fields.description.stringValue || '',
            location: data.fields.location.stringValue || '',
            length: data.fields.length.doubleValue || '',
            type: data.fields.type.stringValue || '',
          });
        } else {
          console.error('Unexpected data structure:', data);
        }
      },
      error => {
        console.error('Error fetching circuit:', error);
      }
    );
  }

  onSubmit() {
    if (this.circuitForm.valid) {
      if (this.circuitId) {
        this.circuitService.updateCircuit(this.circuitId, this.circuitForm.value).subscribe(
          () => {
            this.router.navigate(['/circuit-management']);
          },
          error => {
            console.error('Error updating circuit:', error);
          }
        );
      } else {
        this.circuitService.createCircuit(this.circuitForm.value).subscribe(
          () => {
            this.router.navigate(['/circuit-management']);
          },
          error => {
            console.error('Error creating circuit:', error);
          }
        );
      }
    }
  }
}