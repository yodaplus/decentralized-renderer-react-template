import { v2 } from "@govtechsg/open-attestation";

interface Entity {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}

interface PackageInterface {
  hsCode: string;
  name: string;
  description: string;
  noOfPackage: number;
  packageWidth?: number;
  packageLength?: number;
  volumeCube: number;
  typeOfPackagingAndShippingMarks: string;
  shippingMarks: string;
}

export interface ShipperLetterOfInstructionCertificate extends v2.OpenAttestationDocument {
  documentaryCreditIdentifier?: string;
  issueDate: string;
  dispatchDate: string;
  consignee: Entity;
  buyer: Entity;
  consignor: Entity;
  notifyingParty: Entity;
  freightForwarder: string;
  originCountry: string;
  placeOfIssue: string;
  placeOfDispatch: string;
  tradeTermsConditionsDescription: string;
  handlingInstructions: string;
  goodsValue: number;
  grossWeight: number;
  package: PackageInterface[];
  netWeight: number;
  vesselName: string;
  imoNumber: string;
  watermarkText: string;
}

const termsAndConditions = `Terms and Conditions
General Site Usage
Last Revised: December 16, 2013

Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.

1. YOUR AGREEMENT
By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.

PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
2. PRIVACY
Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.

3. LINKED SITES
This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.

4. FORWARD LOOKING STATEMENTS
All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.

5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY
A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.

B. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.

6. EXCLUSIONS AND LIMITATIONS
SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.

7. OUR PROPRIETARY RIGHTS
This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party's intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.

The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.
`;

export const shipperLetterOfInstructionCertificate: ShipperLetterOfInstructionCertificate = {
  $template: {
    name: "ShipperLetterOfInstruction",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  issuers: [
    {
      name: "Some Shipper Co.",
      documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "https://invoice-doc-renderer.netlify.app",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  //   documentaryCreditIdentifier: "someIdentifier",
  issueDate: "2023-08-01",
  dispatchDate: "2023-08-03",
  consignee: {
    name: "Consignee DEF",
    address: "789 Consignee Rd., Consigneeville, CO 11223",
    phoneNumber: "+1-555-789-0123",
    email: "consignee1@example.com"
  },
  buyer: {
    name: "Importer XYZ",
    address: "456 Import Ave., Import City, IM 67890",
    phoneNumber: "+1-555-987-6543",
    email: "importerxyz@example.com"
  },
  consignor: {
    name: "Consignor GHI",
    address: "321 Carrier Ln., Carrier City, CA 44556",
    phoneNumber: "+1-555-321-0987",
    email: "carrierghi@example.com"
  },
  notifyingParty: {
    name: "Notifying Party JKL",
    address: "654 Notify St., Notify Town, NO 77889",
    phoneNumber: "+1-555-654-3210",
    email: "notifyingpartyjkl@example.com"
  },
  freightForwarder: "KMO Freight Forwarder",
  originCountry: "Exportland",
  placeOfIssue: "Delivery Point A",
  placeOfDispatch: "Final Destination B",
  tradeTermsConditionsDescription: "Standard Terms Apply",
  handlingInstructions: "some handling instructions",
  goodsValue: 34000,
  grossWeight: 2000,
  package: [
    {
      hsCode: "HS123456",
      name: "Commodity 1",
      description: "Electronics",
      noOfPackage: 100,
      volumeCube: 20,
      typeOfPackagingAndShippingMarks: "Some instructions",
      shippingMarks: "shipping marks"
    }
  ],
  netWeight: 100,
  vesselName: "Vessel Voyager",
  imoNumber: "IMO Nummber",
  watermarkText: "My WaterMark Text"
};
