import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {ACR_ARR} from "@/app/components/acro-data";

function AcroSearch() {
    const koo = 1;
    const doo = [
        {id: 1, label: "A/B", val: "Agents and Brokers"},
        {id: 2, label: "ACC", val: "Akamai Control Center"},
        {id: 3, label: "ACK", val: "Acknowledgment"},
        {id: 4, label: "ACT", val: "Adaptive Controls Testing"},
        {id: 5, label: "ADJ", val: "Adjudication"},
        {id: 6, label: "ADO", val: "Application Development Organization"},
        {id: 7, label: "AEM", val: "Adobe Experience Manager"},
        {id: 8, label: "AL2", val: "Amazon Linux2"},
        {id: 9, label: "AMI", val: "Amazon Machine Image"},
        {id: 10, label: "API", val: "Application Programming Interface"},
        {id: 11, label: "App 2", val: "Marketplace 2.0 Application"},
        {id: 12, label: "App 3.0", val: "Marketplace 3.0 Application"},
        {id: 13, label: "APTC", val: "Advance Premium Tax Credit"},
        {id: 14, label: "A/R", val: "Authorized Representative"},
        {id: 15, label: "AR", val: "Advanced Resolution"},
        {id: 16, label: "ARP", val: "American Rescue Plan Act"},
        {id: 17, label: "ART", val: "Agile Release Train"},
        {id: 18, label: "AT", val: "Account Transfer"},
        {id: 19, label: "ATO", val: "Authority to Operate"},
        {id: 20, label: "AW", val: "Appeals Worker"},
        {id: 21, label: "AWS", val: "Amazon Web Service"},
        {id: 22, label: "BAR", val: "Batch Auto Re-enrollment"},
        {id: 23, label: "BEDAP", val: "Beneficiary Experience Data Analytics Portal"},
        {id: 24, label: "BI", val: "Business Impact"},
        {id: 25, label: "BPC", val: "Business Planning and Consolidation"},
        {id: 26, label: "BPC", val: "Business Process Correspondence"},
        {id: 27, label: "BUU", val: "Batch Update Utility"},
        {id: 28, label: "BYOS", val: "Bring Your Own Subscription"},
        {id: 29, label: "CBCI", val: "CloudBees Continuous Improvement"},
        {id: 30, label: "CCIC", val: "CMS Cybersecurity Integration Center (CCIC)"},
        {id: 31, label: "CCIIO", val: "Center for Consumer Information and Insurance Oversight"},
        {id: 32, label: "CCM", val: "Cloud Content Manager"},
        {id: 33, label: "CCR", val: "Call Center Representative"},
        {id: 34, label: "CCXP", val: "Care Choice Experience"},
        {id: 35, label: "CFACTS", val: "CMS FISMA Controls Tracking System"},
        {id: 36, label: "CHIP", val: "Children's Health Insurance Program"},
        {id: 37, label: "CI", val: "Continuous Improvement"},
        {id: 38, label: "CIC", val: "Change in Circumstance"},
        {id: 39, label: "CLI ", val: "Command Line Interface"},
        {id: 40, label: "CMS", val: "Centers for Medicare & Medicaid Services"},
        {id: 41, label: "COFA", val: "Compacts of Free Association"},
        {id: 42, label: "CORR", val: "Correspondence"},
        {id: 43, label: "COTS", val: "Commercial Off-the-Shelf"},
        {id: 44, label: "CR", val: "Continuing Resolution?"},
        {id: 45, label: "CSI", val: "Current Sources of Income"},
        {id: 46, label: "CSR", val: "Customer Service Representative"},
        {id: 47, label: "CU", val: "Change Utility Eligibility Support Desktop Change Utility"},
        {id: 48, label: "ESDCU", val: "Change Utility Eligibility Support Desktop Change Utility"},
        {id: 49, label: "CVP", val: "Customer Value Partners"},
        {id: 50, label: "DE", val: "Direct Enrollment"},
        {id: 51, label: "DEG", val: "Determine Enrollment Group"},
        {id: 52, label: "DMI", val: "Data Matching Issue"},
        {id: 53, label: "DS", val: "DocuSign"},
        {id: 54, label: "DSH", val: "Data Services Hub"},
        {id: 55, label: "DSIS", val: "Division of State IT Support"},
        {id: 56, label: "DSRS", val: "Document Storage and Retrieval Service"},
        {id: 57, label: "DVE", val: "Determine Variable Eligibility"},
        {id: 58, label: "DWO", val: "Division of Website Operations"},
        {id: 59, label: "EACMS", val: "Eligibility Appeals Case Management System"},
        {id: 60, label: "EBS", val: "Elastic Block Storage"},
        {id: 61, label: "EC2", val: "AWS Elastic Compute Cloud"},
        {id: 62, label: "E-CAP", val: "Encription Correction Action Plan"},
        {id: 63, label: "ECM", val: "EDGE Calculation Module"},
        {id: 64, label: "ECWS", val: "Exchange Consumer Web Services"},
        {id: 65, label: "EDE", val: "Enhanced Direct Enrollment"},
        {id: 66, label: "EDGE", val: "External Data Gathering Environment"},
        {id: 67, label: "EDH", val: "Enrollment Data History"},
        {id: 68, label: "EDI", val: "Electronic Data Interchange"},
        {id: 69, label: "EDN", val: "Eligibility Determination Notice"},
        {id: 70, label: "EE", val: "Eligibility and Enrollment"},
        {id: 71, label: "E&E", val: "Eligibility and Enrollment"},
        {id: 72, label: "EFT", val: "Electronic File Transfer"},
        {id: 73, label: "EPM", val: "Enrollment Processing Module"},
        {id: 74, label: "ER&R", val: "Enrollment Reconciliation and Resolution"},
        {id: 75, label: "ESD", val: "Enterprise Systems Development"},
        {id: 76, label: "ESCMEC", val: "Employer Sponsored Coverage Minimum Essential Coverage"},
        {id: 77, label: "ESW", val: "Eligibility Support Workers"},
        {id: 78, label: "EUA", val: "Enterprise User Administration"},
        {id: 79, label: "EVAAS", val: "Eligibility Verification-as-a-Service"},
        {id: 80, label: "EWST", val: "Enterprise Web Support Tool"},
        {id: 81, label: "F5 BIGIP", val: "Load Balancers"},
        {id: 82, label: "F5 Big-IP", val: "Load Balancers"},
        {id: 83, label: "FA", val: "Financial Assistance"},
        {id: 84, label: "FA/nonFA", val: "Financial Assistance / Non-Financial Assistance"},
        {id: 85, label: "FedRAMP", val: "Federal Risk and Authorization Management Program"},
        {id: 86, label: "FFE", val: "Federally Facilitated Exchange"},
        {id: 87, label: "FFM", val: "Federally Facilitated Marketplace"},
        {id: 88, label: "FHO", val: "Federal Hearing Officer"},
        {id: 89, label: "FISMA", val: "Federal Information Security Management Act"},
        {id: 90, label: "FLH", val: "Find Local Help"},
        {id: 91, label: "FM", val: "Financial Management"},
        {id: 92, label: "FPUC", val: "Federal Payment Unemployment Compensation"},
        {id: 93, label: "FTR", val: "Failureto File and Reconcile"},
        {id: 94, label: "G4", val: "Platform Google Analytics 4"},
        {id: 95, label: "GA4", val: "Google Analytics 4"},
        {id: 96, label: "GA4", val: "Google Analytics"},
        {id: 97, label: "GTM", val: "Global Traffic Management"},
        {id: 98, label: "HCV", val: "Health Coverage Verification"},
        {id: 99, label: "HHS", val: "Health & Human Services"},
        {id: 100, label: "HIOS", val: "Health Insurance Oversight System"},
        {id: 101, label: "HPF", val: "Health Plan Finder"},
        {id: 102, label: "HRA", val: "Health Reimbursement Arrangement"},
        {id: 103, label: "Hub", val: "Data Services Hub"},
        {id: 104, label: "HUBESDCU", val: "Change Utility"},
        {id: 105, label: "ESDCU", val: "Eligibility Support Desktop Change Utility"},
        {id: 106, label: "IDE", val: "Integrated Development Environment"},
        {id: 107, label: "IDM", val: "Identity Management, typically in the context of the IDM system owned by OIT"},
        {id: 108, label: "IES", val: "Insurance Enrollment Services"},
        {id: 109, label: "IEM", val: "Infrastructure Event Management"},
        {id: 110, label: "IMPL1B", val: "testing/production environment"},
        {id: 111, label: "IP", val: "Iteration Planning"},
        {id: 112, label: "IRS", val: "Internal Revenue Service"},
        {id: 113, label: "ISAVE", val: "Independent Systems Acceptance and Verification for the Exchange"},
        {id: 114, label: "ISERV", val: "Internet Services"},
        {id: 115, label: "ISSO", val: "Information Systems Security Officer"},
        {id: 116, label: "ITPM", val: "Information Technology Program Manager"},
        {id: 117, label: "ITSI", val: "IT Service Intelligence"},
        {id: 118, label: "IVT/ECAT", val: "Income Verification Tool/Employer Coverage Affordability Tool"},
        {id: 119, label: "JDK", val: "Java Development Kit"},
        {id: 120, label: "JMaas", val: "JMeter as a Service"},
        {id: 121, label: "JMeter", val: "load testing tool in services and web applications"},
        {id: 122, label: "JSON", val: "JavaScript Object Notation"},
        {id: 123, label: "KPI", val: "label Performance Indicator"},
        {id: 124, label: "LA", val: "Language Assistance"},
        {id: 125, label: "LE", val: "Large Employer"},
        {id: 126, label: "LEARN", val: "JavaScript Object Notation"},
        {id: 127, label: "LLE", val: "Lower Level Environment"},
        {id: 128, label: "LTO", val: "Long Term Objective"},
        {id: 129, label: "MAPI", val: "Marketplace Application Programming Interface"},
        {id: 130, label: "MaPS", val: "Marketplace Project Startup"},
        {id: 131, label: "MAX", val: "Medicare Authenticated Experience"},
        {id: 132, label: "MCR", val: "Marketplace Consumer Record"},
        {id: 133, label: "MCT", val: "Medicare Coverage Tools"},
        {id: 134, label: "MEF", val: "Mission Essential Function"},
        {id: 135, label: "MIDAS", val: "Multi-Dimensional Insurance Data Analytics System"},
        {id: 136, label: "MITG", val: "Marketplace Information Technology Group"},
        {id: 137, label: "ML", val: "MarkLogic"},
        {id: 138, label: "MLMS", val: "Marketplace Learning Management System"},
        {id: 139, label: "MNPS", val: "Marketplace Notice Production Services or Notices"},
        {id: 140, label: "MOCC", val: "Marketplace Operations Coordination Center"},
        {id: 141, label: "MODS", val: "Marketplace Outreach Data System"},
        {id: 142, label: "MOSS", val: "Microsoft Office SharePoint Server"},
        {id: 143, label: "MSI", val: "Marketplace Systems Integrator"},
        {id: 144, label: "MTS", val: "Marketplace Technical Review Board Semiannual Session"},
        {id: 145, label: "NAIC", val: "National Association of Insurance Commissioners"},
        {
            id: 146, label: "NIST",
            val: "National Institute of Standards and Technology - Security and Privacy Controls for Information Systems and Organizations"
        },
        {id: 147, label: "NR", val: "Non-renewal"},
        {id: 148, label: "NSA", val: "National Security Agency"},
        {id: 149, label: "OC", val: "Office of Communications"},
        {id: 150, label: "OC", val: "BIA Office of Communication Business Impact Analysis"},
        {id: 151, label: "OCF", val: "Office of Communication Foundational Team"},
        {id: 152, label: "OE", val: "Open Enrollment"},
        {id: 153, label: "OE8", val: "Open Enrollment 2021"},
        {id: 154, label: "OE9", val: "Open Enrollment 2022"},
        {id: 155, label: "OE10", val: "Open Enrollment 2023 (i.e. the 10th OE for the Marketplace"},
        {id: 156, label: "OEX", val: "Open Enrollment 2023 (i.e. the 10th OE for the Marketplace"},
        {id: 157, label: "OIT", val: "Office of Information Technology"},
        {id: 158, label: "OIV/MOEN", val: "Offline Income Verification/ Marketplace Open Enrollment Notices"},
        {id: 159, label: "OMB", val: "Office of Management & Budget"},
        {id: 160, label: "OPERA", val: "Operational Analytics"},
        {id: 161, label: "Ops&OE", val: "Operations & Open Enrollment"},
        {id: 162, label: "PC Classic", val: "Plan Compare Classic"},
        {id: 163, label: "PC2/WS", val: "Plan Compare 2.0/ WINSHOP or Window Shop"},
        {id: 164, label: "PCL", val: "Plan Category Limits"},
        {id: 165, label: "PDM", val: "Periodic Data Match"},
        {id: 166, label: "PET", val: "Premium Estimation Tool"},
        {id: 167, label: "PHI", val: "Protected Health Information"},
        {id: 168, label: "PI", val: "Program Increment"},
        {id: 169, label: "PII", val: "Personal Identifiable Information"},
        {id: 170, label: "PIA", val: "Privacy Impact Analysis"},
        {id: 171, label: "PIV", val: "Personal Identity Verification"},
        {id: 172, label: "PM", val: "Program Manager"},
        {id: 173, label: "PM ML", val: "Plan Management MarkLogic"},
        {id: 174, label: "POA&Ms", val: "Plan of Action and Milestones"},
        {id: 175, label: "PPL", val: "Procedure Price Loopup"},
        {id: 176, label: "PPM", val: "Payment Processing Module"},
        {id: 177, label: "PSC", val: "Program Support Center"},
        {id: 178, label: "PTC", val: "Premium Tax Credit"},
        {id: 179, label: "PTCSEP", val: "Premium Tax Credit Special Enrollment Period"},
        {id: 180, label: "PWSS", val: "Public Website Shared Services (FISMA system owned and maintained by OC.The system includes OC Shared Services as CloudBees CI, JFrog Artifactory, Kong EE, GEO API, LaunchDarkly,Mapbox, SmartyStreets, TestRail and other shared services)"},
        {id: 181, label: "QA", val: "Quality Assurance"},
        {id: 182, label: "QHP", val: "Qualified Health Plan"},
        {id: 183, label: "RDS", val: "Relational Database Service"},
        {id: 184, label: "REST", val: "Representational State Transfer"},
        {id: 185, label: "RFI", val: "Request for Information"},
        {id: 186, label: "RHEL", val: "Red Hat Enterprise Linux"},
        {id: 187, label: "RHELBYOS", val: "Red Hat Enterprise Linux - Bring Your Own Subscription"},
        {id: 188, label: "RI", val: "Requested Information"},
        {id: 189, label: "RIDP", val: "Remote Identify Proofing"},
        {id: 190, label: "ROAM", val: "Resolve Own Accept Mitigate"},
        {id: 191, label: "ROAMing", val: "Resolve Own Accept Mitigate"},
        {id: 192, label: "RTE", val: "Release Train Engineer"},
        {id: 193, label: "S3", val: "Amazon Simple Storage Service"},
        {id: 194, label: "SaaS", val: "Software-as-a-Service"},
        {id: 195, label: "SAFe", val: "Scaled Agile Framework"},
        {id: 196, label: "SAML", val: "Security Assertion Markup Language"},
        {id: 197, label: "SBE ", val: "State Based Exchange"},
        {id: 198, label: "SBEs", val: "State Based Exchange"},
        {id: 199, label: "SCOUT", val: "Security Control Orchestration Utilities and Tooling"},
        {id: 200, label: "SEED", val: "System of Exchange Enrollment Data"},
        {id: 201, label: "SEP", val: "Special Enrollment Period"},
        {id: 202, label: "SERFF", val: "System for Electronic Rate and Form Filing"},
        {id: 203, label: "SERS/SERVIS", val: "State Exchange Resource Virtual Information System"},
        {id: 204, label: "SES", val: "Standalone Eligibility Service"},
        {id: 205, label: "SIA", val: "Security Impact Analysis"},
        {id: 206, label: "SIT", val: "System Inventory Taker"},
        {id: 207, label: "SLS", val: "Scalable Login Service"},
        {id: 208, label: "SLSx", val: "Scalable Login Service"},
        {id: 209, label: "SMART(E)", val:"Specific Measurable Achievable Realistic Time-bound Excited"},
        {id: 210, label: "SMS", val: "Short Message Service"},
        {id: 211, label: "SNI", val: "Server label Identification"},
        {id: 212, label: "SoS", val: "Scrum of Scrums"},
        {id: 213, label: "SSN", val: "Social Security Number"},
        {id: 214, label: "SSO", val: "Systems Security Officer"},
        {id: 215, label: "STP", val: "Short Term Priority"},
        {id: 216, label: "SVI", val: "SEP Verification Issue"},
        {id: 217, label: "TMS", val: "Transactional Messaging Service"},
        {id: 218, label: "TRB", val: "Technical Review Board"},
        {id: 219, label: "UI", val: "User Interface"},
        {id: 220, label: "URR", val: "Unified Rate Review"},
        {id: 221, label: "UX", val: "User Experience"},
        {id: 222, label: "VIP", val: "Virtual IP"},
        {id: 223, label: "VPC", val: "Virtual Private Clouds"},
        {id: 224, label: "WAF", val: "Web Application Firewall"},
        {id: 225, label: "WB", val: "Work Basket"},
        {id: 226, label: "WDS2", val: "Web Development Services 2 (Current Ad Hoc Contract)"},
        {id: 227, label: "WETGDWO", val: "Web and Emerging Technologies Group, Division of Website Ops"},
        {id: 228, label: "WL", val: "Work List"},
        {id: 229, label: "XOC", val: "Exchange Operations Center"},
        {id: 230, label: "ONE", val: "CMS Opportunity to Network and Engage"},
    ];
    const items = ACR_ARR;
    // const items = [
    //     {
    //         id: 0,
    //         name: 'Cobol'
    //     },
    //     {
    //         id: 1,
    //         name: 'JavaScript'
    //     },
    //     {
    //         id: 2,
    //         name: 'Basic'
    //     },
    //     {
    //         id: 3,
    //         name: 'PHP'
    //     },
    //     {
    //         id: 4,
    //         name: 'Java'
    //     }
    // ]

    const handleOnSearch = (string, results) => {
        return results.filter(el => el.label === string)
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left', fontWeight: '700' }}>{item.label.toUpperCase()}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.val}</span>
            </>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={doo}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                            fuseOptions={{ keys: ["label"], minMatchCharLength: 1, threshold: 0 }}
                            // necessary, otherwise the results will be blank
                            resultStringKeyName="val"

                    />
                </div>
            </header>
        </div>
    )

}
export default AcroSearch;
