import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesShowComponent } from './messages-show.component';

describe('MessagesShowComponent', () => {
  let component: MessagesShowComponent;
  let fixture: ComponentFixture<MessagesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
