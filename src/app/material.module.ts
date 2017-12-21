import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatGridListModule, MatSidenavModule, MatOptionModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatGridListModule, MatSidenavModule, MatOptionModule, MatSelectModule, MatDialogModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatGridListModule, MatSidenavModule, MatOptionModule, MatSelectModule, MatDialogModule],
})

export class MaterialModule { }