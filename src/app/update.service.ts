import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({ providedIn: 'root' })
export class UpdateService {
  constructor(private swUpdate: SwUpdate) {
    console.log('sw update init', this.swUpdate.isEnabled);

    if (this.swUpdate.isEnabled) {
      this.swUpdate.activated.subscribe((evt) => {
        console.log(
          'sw update activated',
          evt.current.appData,
          evt.previous?.appData
        );

        this.swUpdate.available.subscribe((evt) => {
          console.log(
            'sw update available',
            evt.available.appData,
            evt.current.appData
          );
          // this.swUpdate.activateUpdate();
        });
      });
    }
  }

  checkForUpdate() {
    this.swUpdate.isEnabled && this.swUpdate.checkForUpdate();
  }
}
