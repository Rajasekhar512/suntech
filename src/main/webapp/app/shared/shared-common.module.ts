import { NgModule } from '@angular/core';

import { SunTrackItSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SunTrackItSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SunTrackItSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SunTrackItSharedCommonModule {}
