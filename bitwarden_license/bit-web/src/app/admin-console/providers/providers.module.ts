import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { JslibModule } from "@bitwarden/angular/jslib.module";
import { SearchModule } from "@bitwarden/components";
import { OrganizationPlansComponent, TaxInfoComponent } from "@bitwarden/web-vault/app/billing";
import { PaymentMethodWarningsModule } from "@bitwarden/web-vault/app/billing/shared";
import { OssModule } from "@bitwarden/web-vault/app/oss.module";

import { DangerZoneComponent } from "../../../../../../apps/web/src/app/auth/settings/account/danger-zone.component";
import { ManageClientOrganizationSubscriptionComponent } from "../../billing/providers/clients/manage-client-organization-subscription.component";
import { ManageClientOrganizationsComponent } from "../../billing/providers/clients/manage-client-organizations.component";

import { AddOrganizationComponent } from "./clients/add-organization.component";
import { ClientsComponent } from "./clients/clients.component";
import { CreateOrganizationComponent } from "./clients/create-organization.component";
import { ProviderPermissionsGuard } from "./guards/provider-permissions.guard";
import { AcceptProviderComponent } from "./manage/accept-provider.component";
import { BulkConfirmComponent } from "./manage/bulk/bulk-confirm.component";
import { BulkRemoveComponent } from "./manage/bulk/bulk-remove.component";
import { EventsComponent } from "./manage/events.component";
import { PeopleComponent } from "./manage/people.component";
import { UserAddEditComponent } from "./manage/user-add-edit.component";
import { ProvidersLayoutComponent } from "./providers-layout.component";
import { ProvidersRoutingModule } from "./providers-routing.module";
import { WebProviderService } from "./services/web-provider.service";
import { AccountComponent } from "./settings/account.component";
import { SetupProviderComponent } from "./setup/setup-provider.component";
import { SetupComponent } from "./setup/setup.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OssModule,
    JslibModule,
    ProvidersRoutingModule,
    OrganizationPlansComponent,
    SearchModule,
    ProvidersLayoutComponent,
    PaymentMethodWarningsModule,
    TaxInfoComponent,
    DangerZoneComponent,
  ],
  declarations: [
    AcceptProviderComponent,
    AccountComponent,
    AddOrganizationComponent,
    BulkConfirmComponent,
    BulkRemoveComponent,
    ClientsComponent,
    CreateOrganizationComponent,
    EventsComponent,
    PeopleComponent,
    SetupComponent,
    SetupProviderComponent,
    UserAddEditComponent,
    ManageClientOrganizationsComponent,
    ManageClientOrganizationSubscriptionComponent,
  ],
  providers: [WebProviderService, ProviderPermissionsGuard],
})
export class ProvidersModule {}
