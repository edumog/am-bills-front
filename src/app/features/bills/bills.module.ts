import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillsComponent } from './components/bills/bills.component';
import { StoreModule } from '@ngrx/store';
import { billsReducer } from './store/bills.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BillsEffects } from './store/bills.effects';
import { BillsRoutingModule } from './bills-routing.module';
import { billsFeatureKey } from './store/selectors';



@NgModule({
  declarations: [
    BillsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BillsRoutingModule,
    StoreModule.forFeature(billsFeatureKey, billsReducer),
    EffectsModule.forFeature([BillsEffects])
  ]
})
export class BillsModule { }
