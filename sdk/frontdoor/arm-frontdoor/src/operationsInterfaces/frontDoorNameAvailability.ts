/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CheckNameAvailabilityInput,
  FrontDoorNameAvailabilityCheckOptionalParams,
  FrontDoorNameAvailabilityCheckResponse
} from "../models";

/** Interface representing a FrontDoorNameAvailability. */
export interface FrontDoorNameAvailability {
  /**
   * Check the availability of a Front Door resource name.
   * @param checkFrontDoorNameAvailabilityInput Input to check.
   * @param options The options parameters.
   */
  check(
    checkFrontDoorNameAvailabilityInput: CheckNameAvailabilityInput,
    options?: FrontDoorNameAvailabilityCheckOptionalParams
  ): Promise<FrontDoorNameAvailabilityCheckResponse>;
}
