import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { CharactersLogicComponent } from './characters-logic/characters-logic.component';

const routes: Routes = [
  {path: 'character', component: CharactersLogicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const components = [CharactersLogicComponent];