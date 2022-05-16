// Source: https://azure.microsoft.com/en-us/global-infrastructure/services/

var regions = [
    'us-ashburn-1',
    'il-jerusalem-1',
    'us-phoenix-1',
    'eu-frankfurt-1',
    'uk-london-1',
    'ca-toronto-1',
    'ap-mumbai-1',
    'ap-seoul-1',
    'ap-tokyo-1',
    'ap-sydney-1',
    'sa-saopaulo-1',
    'ap-osaka-1',
    'eu-zurich-1',
    'ap-melbourne-1',
    'sa-vinhedo-1',
    'ca-montreal-1',
    'sa-santiago-1',
    'ap-hyderabad-1',
    'eu-amsterdam-1',
    'me-jeddah-1',
    'ap-chuncheon-1',
    'me-dubai-1',
    'uk-cardiff-1',
    'us-sanjose-1',
    'eu-marseille-1',
    'il-jerusalem-1',
    'eu-milan-1',
    'ap-singapore-1',
    'eu-amsterdam-1',
    'af-johannesburg-1',
    'eu-stockholm-1'
];

module.exports = {
    default: ['default'],
    all: regions,
    vcn: regions,
    group: regions,
    publicIp: regions,
    securityList: regions,
    loadBalancer: regions,
    user: ['default'],
    userGroupMembership: regions,
    authenticationPolicy: regions,
    exprt: regions,
    exportSummary: regions,
    compartment: regions,
    bucket: regions,
    waasPolicy: regions,
    policy: regions,
    subnet: regions,
    dbHome: regions,
    database: regions,
    instance: regions,
    instancePool: regions,
    autoscaleConfiguration: regions,
    networkSecurityGroup: regions,
    securityRule: regions,
    bootVolume: regions,
    bootVolumeBackup: regions,
    volume: regions,
    volumeBackup: regions,
    bootVolumeAttachment: regions,
    availabilityDomain: ['default'],
    volumeGroup: regions,
    volumeGroupBackup: regions,
    volumeBackupPolicy: regions,
    volumeBackupPolicyAssignment: regions,
    preAuthenticatedRequest: regions,
    configuration: ['default'],
    dbSystem: regions,
    mountTarget: regions,
    namespace: regions,
    apiKey: ['default'],
    authToken: ['default'],
    customerSecretKey: ['default']
};