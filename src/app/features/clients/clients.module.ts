import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { StoreModule } from '@ngrx/store';
import { clientsReducer } from './store/clients.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClientsEffects } from './store/clients.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { clientsFeatureKey } from './store/selectors';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    StoreModule.forFeature(clientsFeatureKey, clientsReducer),
    EffectsModule.forFeature([ClientsEffects])
  ]
})
export class ClientsModule { }
