import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from "./layout/layout.component";
import { StudentComponent } from "./student/student.component";
import { NgModule } from "@angular/core";
import { NewComponentComponent } from "./new-component/new-component.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'student', 
    component: LayoutComponent,
    children: [
      { path: '', component: StudentComponent },]
    
  },
  { path: 'product', 
    component: LayoutComponent,
    children: [
      { path: '', component: NewComponentComponent },]
    
  }
    // component: StudentComponent }
  // { path: 'Layout', component: LayoutComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRouteModule { }
