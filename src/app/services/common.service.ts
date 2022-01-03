import { Injectable } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CommonSpinnerComponent } from '../components/common/common-spinner/common-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private overlayRef!: OverlayRef;

  constructor(private overlay: Overlay) { }

  public attachSpinner() {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    const spinnerOverlayPortal = new ComponentPortal(CommonSpinnerComponent);
    const component = this.overlayRef.attach(spinnerOverlayPortal);
  }

  public detachSpinner() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
