/**
 * Arm and hand rows fitted on the sample VRM for what the signs use beyond the tables in
 * library.js, written by `node scripts/fit_arm.mjs jobs`, which fits only what is missing:
 *   turn|location|palm:fingers|1h or 2h               the hand turned to point its palm and fingers
 *   site|location|hold|handshape|site|1h or 2h         the hand moved so that part of it touches
 *   path|location|hold|1h or 2h|movement               a directed path, tap, nod or twist
 * (hold: the named orientation, palm:fingers, or natural). Each row is arm and hand offsets,
 * right side (mirrored for the left): a turn and a site add to the held pose, a path's rows to
 * the pose it starts from.
 */
export const FITTED = {
  // worst point 0 cm off, palm 0.9°, fingers 0.3°
  "path|belly|in:contra|2h|linear:up": [
    { UpperArm: [0.028, -0.094, -0.003], LowerArm: [0, 0.371, 0], Hand: [-0.014, -0.312, -0.002] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0°
  "path|belly|in:down+ipsi12|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.027, -0.009, -0.6] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.9°
  "path|cheek|contra:up+ipsi4|1h|arc:out": [
    { UpperArm: [-0.185, 0.041, -0.002], LowerArm: [0, -0.184, 0], Hand: [0.036, -0.007, 0.006] },
    { UpperArm: [-0.119, 0.04, -0.012], LowerArm: [0, -0.338, 0], Hand: [0.044, 0.2, 0.014] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 1.1°
  "path|cheek|contra:up|1h|arc:out": [
    { UpperArm: [-0.082, -0.022, -0.012], LowerArm: [0, -0.197, 0], Hand: [-0.014, 0.111, -0.005] },
    { UpperArm: [0.026, -0.038, -0.05], LowerArm: [0, -0.302, 0], Hand: [-0.025, 0.317, -0.023] },
  ],
  // worst point 0.01 cm off, palm 0.7°, fingers 0.5°
  "path|cheek|contra:up|1h|linear:ipsi": [
    { UpperArm: [-0.176, -0.389, -0.176], LowerArm: [0, -0.144, 0], Hand: [-0.315, 0.043, 0.208] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 1.1°
  "path|cheek|contra:up|1h|linear:out": [
    { UpperArm: [0.026, -0.038, -0.05], LowerArm: [0, -0.302, 0], Hand: [-0.025, 0.317, -0.023] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|cheek|contra:up|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, -0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, 0, -0.002] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|cheek|down:contra|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, -0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.796, 0.001, -0.003] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.6°
  "path|cheek|in:contra|1h|tap": [
    { UpperArm: [-0.023, -0.155, -0.007], LowerArm: [0, -0.001, 0], Hand: [-0.06, -0.11, 0.043] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 0.6°
  "path|cheek|in:up|1h|linear:out": [
    { UpperArm: [0.087, -0.106, -0.094], LowerArm: [0, -0.26, 0], Hand: [-0.09, 0.08, 0.318] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0°
  "path|cheek|in:up|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.016, 0.024, -0.594] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.3°
  "path|cheek|in:up|1h|tap": [
    { UpperArm: [-0.001, -0.11, -0.058], LowerArm: [0, 0.034, 0], Hand: [-0.11, -0.053, -0.011] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 1.3°
  "path|chest-front|contra:out+ipsi4|2h|linear:down": [
    { UpperArm: [0.149, 0.068, -0.041], LowerArm: [0, -0.223, 0], Hand: [0.009, 0.354, -0.024] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.3°
  "path|chest-front|contra:out|2h|arc:out": [
    { UpperArm: [-0.21, 0.027, -0.021], LowerArm: [0, -0.124, 0], Hand: [-0.043, -0.074, -0.017] },
    { UpperArm: [-0.289, 0.051, -0.028], LowerArm: [0, -0.347, 0], Hand: [-0.021, 0.056, 0.013] },
  ],
  // worst point 0.01 cm off, palm 1.2°, fingers 1°
  "path|chest-front|down:out+ipsi4|2h|linear:down": [
    { UpperArm: [0.265, -0.071, 0.056], LowerArm: [0, -0.221, 0], Hand: [-0.085, 0.191, -0.107] },
  ],
  // worst point 0.01 cm off, palm 1.2°, fingers 1.8°
  "path|chest-front|down:out|1h|linear:up": [
    { UpperArm: [-0.287, 0.033, -0.024], LowerArm: [0, 0.114, 0], Hand: [0.076, -0.172, 0.384] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.3°
  "path|chest-front|down:out|2h|arc:out": [
    { UpperArm: [-0.204, 0.037, -0.013], LowerArm: [0, -0.125, 0], Hand: [-0.018, -0.037, 0.067] },
    { UpperArm: [-0.277, 0.06, 0.01], LowerArm: [0, -0.349, 0], Hand: [-0.02, 0.064, -0.028] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.1°
  "path|chest-front|in:contra+in2|2h|linear:out+up": [
    { UpperArm: [-0.342, 0.061, -0.003], LowerArm: [0, -0.169, 0], Hand: [-0.027, -0.172, -0.013] },
  ],
  // worst point 0 cm off, palm 1.1°, fingers 0.2°
  "path|chest-front|in:contra+in2|2h|linear:up": [
    { UpperArm: [-0.272, -0.035, 0.035], LowerArm: [0, 0.114, 0], Hand: [-0.057, -0.367, -0.027] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.1°
  "path|chest-front|in:contra|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, -0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.796, 0, -0.003] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.4°
  "path|chest-front|up:out|1h|arc:out": [
    { UpperArm: [-0.201, 0.01, -0.019], LowerArm: [0, -0.119, 0], Hand: [-0.059, 0.005, -0.065] },
    { UpperArm: [-0.275, 0.008, -0.015], LowerArm: [0, -0.338, 0], Hand: [-0.132, -0.017, 0.093] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.2°
  "path|chest-front|up:out|2h|arc:out": [
    { UpperArm: [-0.203, 0.028, -0.008], LowerArm: [0, -0.121, 0], Hand: [-0.023, -0.003, -0.079] },
    { UpperArm: [-0.279, 0.042, 0.019], LowerArm: [0, -0.345, 0], Hand: [-0.04, -0.053, 0.057] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|chest|contra:in|1h|tap": [
    { UpperArm: [-0.105, -0.084, -0.061], LowerArm: [0, -0.171, 0], Hand: [-0.005, 0.007, 0.069] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|chest|contra:up|1h|tap": [
    { UpperArm: [-0.102, 0.016, 0.015], LowerArm: [0, -0.135, 0], Hand: [0.01, -0.035, -0.005] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.5°
  "path|chest|down:in+contra+contra9|1h|tap": [
    { UpperArm: [-0.082, 0.055, -0.029], LowerArm: [0, -0.141, 0], Hand: [-0.064, 0.064, 0.016] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.2°
  "path|chest|down:in+contra|1h|tap": [
    { UpperArm: [-0.091, 0.032, 0.003], LowerArm: [0, -0.146, 0], Hand: [-0.023, 0.022, 0.055] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.1°
  "path|chest|in:contra+ipsi4|2h|linear:out": [
    { UpperArm: [-0.265, 0.136, -0.029], LowerArm: [0, -0.388, 0], Hand: [0.046, 0.105, -0.025] },
  ],
  // worst point 0 cm off, palm 1°, fingers 0.5°
  "path|chest|in:contra+up4|2h|linear:down": [
    { UpperArm: [0.161, 0.087, 0.039], LowerArm: [0, -0.254, 0], Hand: [0.093, 0.356, 0.018] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 0.4°
  "path|chest|in:contra|1h|linear:down": [
    { UpperArm: [0.078, 0.051, 0.005], LowerArm: [0, -0.281, 0], Hand: [0.054, 0.331, 0.005] },
  ],
  // worst point 0 cm off, palm 0.8°, fingers 0.6°
  "path|chest|in:contra|1h|linear:up": [
    { UpperArm: [-0.335, 0.019, -0.019], LowerArm: [0, 0.037, 0], Hand: [-0.04, -0.347, -0.009] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|chest|in:contra|1h|tap": [
    { UpperArm: [-0.096, 0.038, -0.008], LowerArm: [0, -0.131, 0], Hand: [0.008, 0.029, 0] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 0.5°
  "path|chest|in:up+contra13+up5|1h|tap": [
    { UpperArm: [-0.06, -0.05, 0.001], LowerArm: [0, -0.096, 0], Hand: [-0.102, -0.021, 0.085] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.3°
  "path|chest|in:up+contra6|1h|tap": [
    { UpperArm: [-0.105, -0.028, 0.046], LowerArm: [0, -0.125, 0], Hand: [-0.034, -0.06, 0.043] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.4°
  "path|chest|in:up|1h|linear:out": [
    { UpperArm: [-0.288, -0.012, 0.022], LowerArm: [0, -0.323, 0], Hand: [-0.104, -0.054, 0.067] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|chest|in:up|1h|tap": [
    { UpperArm: [-0.107, 0.006, 0.001], LowerArm: [0, -0.106, 0], Hand: [-0.033, -0.015, 0.005] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|chest|in:up|2h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.033, -0.004, -0.583] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|chest|in:up|2h|tap": [
    { UpperArm: [-0.107, 0.006, 0.001], LowerArm: [0, -0.106, 0], Hand: [-0.033, -0.015, 0.005] },
  ],
  // worst point 0.33 cm off, palm 10.1°, fingers 14.3°
  "path|chin|contra:up|1h|linear:down": [
    { UpperArm: [0.178, -0.018, -0.05], LowerArm: [0, -0.261, 0], Hand: [0.365, 0.622, -0.372] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.8°
  "path|chin|contra:up|1h|linear:out": [
    { UpperArm: [-0.056, -0.067, -0.052], LowerArm: [0, -0.311, 0], Hand: [-0.06, 0.27, -0.041] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0°
  "path|chin|contra:up|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.002, 0.028, -0.598] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.3°
  "path|chin|contra:up|1h|tap": [
    { UpperArm: [-0.017, 0.011, -0.004], LowerArm: [0, -0.122, 0], Hand: [0.009, 0.099, -0.001] },
  ],
  // worst point 0.01 cm off, palm 1.5°, fingers 0.9°
  "path|chin|down:contra+down4|1h|linear:down": [
    { UpperArm: [0.558, -0.1, 0.087], LowerArm: [0, -0.003, 0], Hand: [0.034, 0.495, 0.108] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.3°
  "path|chin|down:contra|1h|linear:ipsi": [
    { UpperArm: [-0.184, -0.311, -0.1], LowerArm: [0, -0.195, 0], Hand: [-0.097, 0.058, 0.344] },
  ],
  // worst point 0.02 cm off, palm 2.5°, fingers 2.2°
  "path|chin|in:contra|1h|linear:down": [
    { UpperArm: [0.313, 0.103, -0.538], LowerArm: [0, 0.075, 0], Hand: [-0.06, 0.598, 0.185] },
  ],
  // worst point 0 cm off, palm 0.8°, fingers 0.4°
  "path|chin|in:contra|1h|tap": [
    { UpperArm: [-0.042, -0.017, -0.165], LowerArm: [0, -0.093, 0], Hand: [-0.075, 0.138, 0.032] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.2°
  "path|chin|in:up+contra2|1h|tap": [
    { UpperArm: [-0.041, -0.059, -0.049], LowerArm: [0, -0.083, 0], Hand: [-0.116, 0.049, 0.062] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.2°
  "path|chin|in:up+ipsi2|1h|tap": [
    { UpperArm: [-0.05, -0.051, -0.029], LowerArm: [0, -0.097, 0], Hand: [-0.105, 0.034, 0.078] },
  ],
  // worst point 0.08 cm off, palm 4.6°, fingers 8.4°
  "path|chin|in:up|1h|linear:down": [
    { UpperArm: [0.176, 0.032, -0.05], LowerArm: [0, -0.302, 0], Hand: [-0.318, 0.293, 0.678] },
  ],
  // worst point 0.01 cm off, palm 1.8°, fingers 1.1°
  "path|chin|in:up|1h|linear:out+down": [
    { UpperArm: [0.082, -0.12, -0.022], LowerArm: [0, -0.271, 0], Hand: [-0.272, 0.06, 0.459] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.2°
  "path|chin|in:up|1h|tap": [
    { UpperArm: [-0.054, -0.046, -0.024], LowerArm: [0, -0.097, 0], Hand: [-0.102, 0.027, 0.074] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|chin|in:up|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, -0.001, -0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, 0.001, 0.001] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 1.3°
  "path|eye|contra:up+ipsi6|2h|linear:out": [
    { UpperArm: [-0.029, 0.03, -0.027], LowerArm: [0, -0.32, 0], Hand: [0.04, 0.274, 0.004] },
  ],
  // worst point 0.01 cm off, palm 0.9°, fingers 1.3°
  "path|eye|contra:up+out8+ipsi4|1h|linear:down+contra": [
    { UpperArm: [0.251, 0.208, 0.065], LowerArm: [0, -0.089, 0], Hand: [0.224, 0.284, -0.128] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|eye|down:contra+ipsi4|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, -0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.797, 0, -0.002] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 1.6°
  "path|eye|down:out+out4|2h|linear:out": [
    { UpperArm: [0.179, 0.067, 0.05], LowerArm: [0, -0.259, 0], Hand: [0.062, 0.335, -0.167] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.6°
  "path|eye|in:up+down2|1h|linear:out": [
    { UpperArm: [-0.038, -0.129, -0.076], LowerArm: [0, -0.304, 0], Hand: [-0.067, 0.059, 0.243] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|eye|in:up+down2|1h|tap": [
    { UpperArm: [-0.02, -0.075, -0.026], LowerArm: [0, -0.096, 0], Hand: [-0.069, 0.017, 0.071] },
  ],
  // worst point 0.01 cm off, palm 0.4°, fingers 3.4°
  "path|eye|in:up+out3|1h|linear:down": [
    { UpperArm: [0.206, 0.216, -0.74], LowerArm: [0, -0.028, 0], Hand: [-0.327, 0.639, 0.115] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.3°
  "path|forearm|contra:out+down3|1h|linear:contra": [
    { UpperArm: [-0.321, 0.231, 0.249], LowerArm: [0, -0.285, 0], Hand: [-0.034, 0.065, -0.194] },
  ],
  // worst point 0.01 cm off, palm 1.1°, fingers 1.5°
  "path|forearm|down:contra+down3|1h|linear:contra": [
    { UpperArm: [-0.04, 0.276, 0.132], LowerArm: [0, -0.083, 0], Hand: [0.272, -0.187, -0.116] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.2°
  "path|forearm|down:contra+down3|1h|tap": [
    { UpperArm: [-0.06, -0.005, 0.004], LowerArm: [0, 0.073, 0], Hand: [-0.096, -0.062, 0.1] },
  ],
  // worst point 0.01 cm off, palm 1.8°, fingers 2.4°
  "path|forehead|contra:out+out8+ipsi7+up2|2h|linear:out": [
    { UpperArm: [0.204, 0.106, -0.11], LowerArm: [0, -0.204, 0], Hand: [0.144, 0.396, 0.113] },
  ],
  // worst point 0.01 cm off, palm 0.5°, fingers 2°
  "path|forehead|contra:up+out+out4|1h|linear:out": [
    { UpperArm: [0.181, -0.032, -0.233], LowerArm: [0, -0.199, 0], Hand: [-0.029, 0.364, 0.095] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 1.5°
  "path|forehead|contra:up+up4+out2|1h|linear:out+down": [
    { UpperArm: [0.338, 0.017, -0.131], LowerArm: [0, -0.056, 0], Hand: [0.099, 0.31, -0.04] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.4°
  "path|forehead|contra:up|1h|tap": [
    { UpperArm: [0.017, 0.014, -0.003], LowerArm: [0, -0.105, 0], Hand: [0.018, 0.108, 0.012] },
  ],
  // worst point 0.01 cm off, palm 1.6°, fingers 2°
  "path|forehead|down:contra|1h|linear:ipsi": [
    { UpperArm: [-0.097, -0.282, -0.026], LowerArm: [0, -0.156, 0], Hand: [0.038, 0.024, 0.321] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 0.5°
  "path|forehead|in:up+contra|1h|tap": [
    { UpperArm: [0.037, 0.01, -0.023], LowerArm: [0, -0.091, 0], Hand: [0.084, -0.022, 0.144] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.2°
  "path|forehead|in:up+ipsi4|1h|linear:out+up": [
    { UpperArm: [-0.216, -0.186, -0.021], LowerArm: [0, -0.336, 0], Hand: [0.006, 0.033, 0.046] },
  ],
  // worst point 0.01 cm off, palm 1°, fingers 1.3°
  "path|forehead|in:up+ipsi6+out6|2h|linear:down+contra": [
    { UpperArm: [0.25, 0.235, -0.039], LowerArm: [0, -0.029, 0], Hand: [0.156, 0.216, 0.295] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.2°
  "path|forehead|in:up|1h|linear:out+up": [
    { UpperArm: [-0.187, -0.21, -0.025], LowerArm: [0, -0.343, 0], Hand: [-0.018, 0.03, 0.065] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.2°
  "path|forehead|in:up|1h|tap": [
    { UpperArm: [0.023, -0.079, -0.043], LowerArm: [0, -0.086, 0], Hand: [-0.054, 0.02, 0.069] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 1°
  "path|forehead|out:up+contra+ipsi5|1h|linear:out+ipsi": [
    { UpperArm: [0.016, -0.148, -0.037], LowerArm: [0, -0.252, 0], Hand: [-0.046, 0.322, -0.049] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 1.1°
  "path|head|contra:up+ipsi4|1h|linear:out": [
    { UpperArm: [0.045, 0.043, -0.018], LowerArm: [0, -0.313, 0], Hand: [0.048, 0.339, -0.003] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|head|contra:up+ipsi4|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, -0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.797, 0, -0.003] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.8°
  "path|head|in:up+contra|1h|tap": [
    { UpperArm: [-0.056, -0.133, -0.029], LowerArm: [0, -0.038, 0], Hand: [-0.098, -0.098, -0.005] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|head|out:up+ipsi8+out8|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0.001, 0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, 0] },
  ],
  // worst point 0.01 cm off, palm 1.1°, fingers 1.5°
  "path|mouth|contra:out+out5|2h|linear:out": [
    { UpperArm: [0.113, -0.253, -0.128], LowerArm: [0, -0.236, 0], Hand: [-0.131, 0.316, 0.107] },
  ],
  // worst point 0.01 cm off, palm 0.4°, fingers 1.1°
  "path|mouth|contra:up|1h|linear:down": [
    { UpperArm: [0.414, 0.024, -0.167], LowerArm: [0, -0.006, 0], Hand: [0.095, 0.351, -0.169] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.3°
  "path|mouth|contra:up|1h|tap": [
    { UpperArm: [0, -0.028, -0.025], LowerArm: [0, -0.105, 0], Hand: [-0.024, 0.105, -0.02] },
  ],
  // worst point 0.01 cm off, palm 0.7°, fingers 0.8°
  "path|mouth|down:contra+out2|1h|linear:contra": [
    { UpperArm: [0.119, 0.271, 0.236], LowerArm: [0, -0.058, 0], Hand: [0.314, 0.048, -0.118] },
  ],
  // worst point 0.03 cm off, palm 0.3°, fingers 5.8°
  "path|mouth|in:contra+ipsi3|2h|linear:up+ipsi": [
    { UpperArm: [-0.313, -0.034, 0.005], LowerArm: [0, -0.274, 0], Hand: [0.023, -0.134, -0.04] },
  ],
  // worst point 0.01 cm off, palm 0.5°, fingers 0.6°
  "path|mouth|in:up+ipsi3|2h|linear:up+ipsi": [
    { UpperArm: [-0.439, -0.281, -0.138], LowerArm: [0, -0.052, 0], Hand: [-0.365, -0.107, -0.23] },
  ],
  // worst point 0.01 cm off, palm 0.5°, fingers 0.7°
  "path|mouth|in:up+out4|1h|linear:out+down": [
    { UpperArm: [0.049, -0.008, -0.145], LowerArm: [0, -0.271, 0], Hand: [-0.2, 0.149, 0.336] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|mouth|in:up+out4|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, -0.001, -0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, 0.001, 0] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 0.4°
  "path|mouth|in:up+up3|1h|arc:out": [
    { UpperArm: [-0.156, -0.112, 0.021], LowerArm: [0, -0.153, 0], Hand: [-0.091, -0.028, 0.019] },
    { UpperArm: [-0.106, -0.17, -0.034], LowerArm: [0, -0.295, 0], Hand: [-0.167, 0.019, 0.208] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.1°
  "path|mouth|in:up+up3|1h|tap": [
    { UpperArm: [-0.034, -0.069, -0.024], LowerArm: [0, -0.098, 0], Hand: [-0.075, 0.017, 0.07] },
  ],
  // worst point 0.01 cm off, palm 1.2°, fingers 1.1°
  "path|mouth|in:up|1h|linear:down": [
    { UpperArm: [0.333, -0.001, -0.228], LowerArm: [0, -0.144, 0], Hand: [-0.157, 0.25, 0.41] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|mouth|in:up|1h|tap": [
    { UpperArm: [-0.017, -0.028, -0.01], LowerArm: [0, -0.115, 0], Hand: [-0.043, 0.006, 0.106] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|mouth|in:up|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, -0.001, -0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, 0.001, 0] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|neck|contra:up|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0, 0] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, 0] },
  ],
  // worst point 0.01 cm off, palm 0.4°, fingers 1°
  "path|neck|down:in+out4|1h|linear:out": [
    { UpperArm: [-0.11, -0.094, 0.112], LowerArm: [0, -0.391, 0], Hand: [-0.125, -0.088, 0.365] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.4°
  "path|neutral-space-high|down:out|2h|linear:down": [
    { UpperArm: [0.228, -0.044, 0.022], LowerArm: [0, 0.007, 0], Hand: [0.022, 0.036, -0.21] },
  ],
  // worst point 0.3 cm off, palm 4.4°, fingers 4.4°
  "path|neutral-space-high|out:up+contra3|2h|linear:up": [
    { UpperArm: [-0.202, -0.429, 0.325], LowerArm: [0, -0.015, 0], Hand: [0.441, 0.297, 0.355] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0°
  "path|neutral-space-high|out:up|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.014, 0.025, -0.596] },
  ],
  // worst point 0.02 cm off, palm 5.7°, fingers 1.4°
  "path|neutral-space|contra+down:up+contra+contra4|2h|linear:ipsi": [
    { UpperArm: [-0.051, -0.404, -0.005], LowerArm: [0, -0.024, 0], Hand: [-0.133, 0.197, 0.42] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.1°
  "path|neutral-space|contra+down:up+contra+contra4|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.793, 0, -0.006] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.792, -0.001, 0.007] },
  ],
  // worst point 0.01 cm off, palm 0°, fingers 0.8°
  "path|neutral-space|contra:out+contra2|2h|linear:out": [
    { UpperArm: [-0.375, -0.001, -0.007], LowerArm: [0, -0.611, 0], Hand: [0.011, 0.224, 0.005] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.3°
  "path|neutral-space|contra:out+contra6|2h|linear:ipsi": [
    { UpperArm: [-0.045, -0.108, -0.183], LowerArm: [0, 0.049, 0], Hand: [-0.097, -0.024, 0.151] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|neutral-space|contra:out+contra6|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.002] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|neutral-space|contra:out+contra7|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.002] },
  ],
  // worst point 0.01 cm off, palm 0.1°, fingers 0.8°
  "path|neutral-space|contra:out|1h|linear:out": [
    { UpperArm: [-0.38, -0.027, -0.009], LowerArm: [0, -0.619, 0], Hand: [0.008, 0.228, 0.003] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|neutral-space|contra:out|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.002] },
  ],
  // worst point 0.01 cm off, palm 0°, fingers 0.8°
  "path|neutral-space|contra:out|2h|arc:out": [
    { UpperArm: [-0.187, 0.008, -0.001], LowerArm: [0, -0.2, 0], Hand: [0.006, 0.012, 0.001] },
    { UpperArm: [-0.372, 0.023, -0.006], LowerArm: [0, -0.607, 0], Hand: [0.014, 0.222, 0.004] },
  ],
  // worst point 0.01 cm off, palm 0°, fingers 0.8°
  "path|neutral-space|contra:out|2h|linear:out": [
    { UpperArm: [-0.372, 0.023, -0.006], LowerArm: [0, -0.607, 0], Hand: [0.014, 0.222, 0.004] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.9°
  "path|neutral-space|contra:out|2h|linear:up": [
    { UpperArm: [-0.119, -0.002, 0.01], LowerArm: [0, 0.158, 0], Hand: [-0.001, -0.264, -0.004] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.1°
  "path|neutral-space|contra:up+contra5|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.787, -0.001, -0.012] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.787, 0, 0.012] },
  ],
  // worst point 0 cm off, palm 2°, fingers 0.3°
  "path|neutral-space|contra:up+contra6|2h|linear:ipsi": [
    { UpperArm: [-0.114, 0.169, -0.324], LowerArm: [0, 0.059, 0], Hand: [-0.299, -0.038, -0.034] },
  ],
  // worst point 0.02 cm off, palm 3°, fingers 4.7°
  "path|neutral-space|down:contra+contra4|2h|linear:ipsi": [
    { UpperArm: [-0.056, -0.377, -0.015], LowerArm: [0, -0.019, 0], Hand: [-0.165, 0.195, 0.413] },
  ],
  // worst point 0.02 cm off, palm 3.1°, fingers 3.6°
  "path|neutral-space|down:contra+contra6|2h|linear:ipsi": [
    { UpperArm: [-0.027, -0.41, -0.001], LowerArm: [0, 0.007, 0], Hand: [-0.117, 0.224, 0.395] },
  ],
  // worst point 0.01 cm off, palm 2.2°, fingers 1.1°
  "path|neutral-space|down:contra+contra6|2h|linear:up": [
    { UpperArm: [-0.11, -0.086, 0.005], LowerArm: [0, 0.176, 0], Hand: [-0.26, -0.152, 0.33] },
  ],
  // worst point 0.01 cm off, palm 1.2°, fingers 1.1°
  "path|neutral-space|down:out+contra4|1h|linear:ipsi": [
    { UpperArm: [0.056, -0.466, 0.037], LowerArm: [0, 0.079, 0], Hand: [0.298, 0.336, 0.149] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.9°
  "path|neutral-space|down:out+contra4|2h|linear:down+ipsi": [
    { UpperArm: [0.052, -0.211, 0.005], LowerArm: [0, -0.159, 0], Hand: [0.062, 0.246, -0.158] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 1°
  "path|neutral-space|down:out+contra4|2h|linear:ipsi": [
    { UpperArm: [-0.005, -0.369, -0.001], LowerArm: [0, 0.018, 0], Hand: [0.145, 0.315, 0.073] },
  ],
  // worst point 0 cm off, palm 0.8°, fingers 1.1°
  "path|neutral-space|down:out+contra6|2h|linear:ipsi": [
    { UpperArm: [0.026, -0.406, 0.014], LowerArm: [0, 0.048, 0], Hand: [0.201, 0.323, 0.101] },
  ],
  // worst point 0.01 cm off, palm 0.4°, fingers 0.3°
  "path|neutral-space|down:out+contra6|2h|linear:out+contra": [
    { UpperArm: [-0.327, 0.014, 0.301], LowerArm: [0, -0.532, 0], Hand: [0.012, 0.082, -0.162] },
  ],
  // worst point 0.01 cm off, palm 1.2°, fingers 1.1°
  "path|neutral-space|down:out+contra8|2h|linear:ipsi": [
    { UpperArm: [0.056, -0.466, 0.037], LowerArm: [0, 0.078, 0], Hand: [0.297, 0.336, 0.149] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.8°
  "path|neutral-space|down:out+contra8|2h|linear:out+ipsi": [
    { UpperArm: [-0.161, -0.091, 0.016], LowerArm: [0, -0.327, 0], Hand: [-0.037, 0.265, -0.074] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.5°
  "path|neutral-space|down:out+in4|1h|linear:out": [
    { UpperArm: [-0.293, -0.005, 0.111], LowerArm: [0, -0.473, 0], Hand: [-0.037, 0.131, -0.138] },
  ],
  // worst point 0.01 cm off, palm 0.9°, fingers 0.6°
  "path|neutral-space|down:out+ipsi|1h|linear:out+ipsi": [
    { UpperArm: [-0.22, -0.177, -0.015], LowerArm: [0, -0.365, 0], Hand: [-0.074, 0.23, -0.164] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.5°
  "path|neutral-space|down:out+up6|2h|linear:down": [
    { UpperArm: [0.121, -0.022, 0.046], LowerArm: [0, -0.173, 0], Hand: [0.015, 0.069, -0.265] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.5°
  "path|neutral-space|down:out|1h|linear:contra": [
    { UpperArm: [-0.091, 0.115, 0.203], LowerArm: [0, -0.127, 0], Hand: [0.076, -0.13, -0.027] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 0.6°
  "path|neutral-space|down:out|1h|linear:down": [
    { UpperArm: [0.044, -0.039, 0.092], LowerArm: [0, -0.282, 0], Hand: [0.013, 0.119, -0.279] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 1°
  "path|neutral-space|down:out|1h|linear:ipsi": [
    { UpperArm: [-0.005, -0.37, -0.001], LowerArm: [0, 0.018, 0], Hand: [0.146, 0.315, 0.072] },
  ],
  // worst point 0.01 cm off, palm 0.5°, fingers 0.7°
  "path|neutral-space|down:out|1h|linear:out": [
    { UpperArm: [-0.351, -0.011, 0.17], LowerArm: [0, -0.62, 0], Hand: [-0.023, 0.189, -0.197] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.8°
  "path|neutral-space|down:out|1h|linear:out+ipsi": [
    { UpperArm: [-0.209, -0.096, 0.005], LowerArm: [0, -0.367, 0], Hand: [-0.027, 0.241, -0.101] },
  ],
  // worst point 0 cm off, palm 0.8°, fingers 0.6°
  "path|neutral-space|down:out|1h|linear:up": [
    { UpperArm: [-0.131, -0.053, 0.003], LowerArm: [0, 0.159, 0], Hand: [0.086, -0.026, 0.291] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|neutral-space|down:out|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.017, 0.023, -0.606] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.6°
  "path|neutral-space|down:out|2h|linear:down": [
    { UpperArm: [0.047, -0.015, 0.064], LowerArm: [0, -0.278, 0], Hand: [0.014, 0.09, -0.285] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 1°
  "path|neutral-space|down:out|2h|linear:ipsi": [
    { UpperArm: [-0.069, -0.326, -0.023], LowerArm: [0, -0.043, 0], Hand: [0.097, 0.305, 0.042] },
  ],
  // worst point 0.01 cm off, palm 0.4°, fingers 0.5°
  "path|neutral-space|down:out|2h|linear:out": [
    { UpperArm: [-0.343, 0.036, 0.113], LowerArm: [0, -0.608, 0], Hand: [-0.009, 0.128, -0.205] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0°
  "path|neutral-space|down:out|2h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.017, 0.022, -0.604] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|neutral-space|down:out|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.001] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 0.3°
  "path|neutral-space|in:contra+contra3|2h|linear:up": [
    { UpperArm: [-0.11, -0.064, 0.001], LowerArm: [0, 0.172, 0], Hand: [-0.001, -0.258, -0.007] },
  ],
  // worst point 0.01 cm off, palm 0.5°, fingers 1°
  "path|neutral-space|in:contra+contra4|2h|linear:ipsi": [
    { UpperArm: [-0.072, -0.38, -0.014], LowerArm: [0, -0.047, 0], Hand: [0.245, -0.016, 0.322] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 0.3°
  "path|neutral-space|in:contra+contra4|2h|linear:up": [
    { UpperArm: [-0.111, -0.071, 0.002], LowerArm: [0, 0.171, 0], Hand: [-0.002, -0.258, -0.008] },
  ],
  // worst point 0.01 cm off, palm 0.4°, fingers 0.8°
  "path|neutral-space|in:contra+contra8|2h|linear:ipsi": [
    { UpperArm: [0.001, -0.362, -0.033], LowerArm: [0, 0.022, 0], Hand: [0.211, -0.047, 0.293] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.6°
  "path|neutral-space|in:down+contra4|2h|linear:up": [
    { UpperArm: [-0.149, -0.053, 0.008], LowerArm: [0, 0.106, 0], Hand: [0.077, -0.027, 0.258] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.1°
  "path|neutral-space|in:up+up6|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, -0.001, 0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, 0.001, -0.001] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.5°
  "path|neutral-space|in:up|2h|linear:up": [
    { UpperArm: [0.015, -0.001, 0.111], LowerArm: [0, 0.249, 0], Hand: [0.011, -0.086, -0.266] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.1°
  "path|neutral-space|in:up|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, -0.001, 0] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, 0.001, -0.001] },
  ],
  // worst point 0.01 cm off, palm 0.9°, fingers 0.7°
  "path|neutral-space|out:up+contra4|2h|linear:out+ipsi": [
    { UpperArm: [-0.332, -0.034, -0.007], LowerArm: [0, -0.601, 0], Hand: [-0.024, 0.206, -0.238] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.1°
  "path|neutral-space|out:up+contra5+down3+in2|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, 0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.001] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.1°
  "path|neutral-space|out:up+contra6|2h|linear:ipsi": [
    { UpperArm: [0.026, -0.083, -0.173], LowerArm: [0, 0.052, 0], Hand: [-0.071, 0.149, -0.005] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.1°
  "path|neutral-space|out:up+contra6|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.001] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0°
  "path|neutral-space|out:up+contra7|2h|linear:ipsi": [
    { UpperArm: [0.04, -0.083, -0.178], LowerArm: [0, 0.069, 0], Hand: [-0.069, 0.145, -0.002] },
  ],
  // worst point 0.52 cm off, palm 14.8°, fingers 15.3°
  "path|neutral-space|out:up+ipsi8|1h|linear:out": [
    { UpperArm: [-0.481, -0.044, 0.09], LowerArm: [0, -0.863, 0], Hand: [0.105, 0.101, -0.082] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.1°
  "path|neutral-space|out:up+up4|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.001] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0°
  "path|neutral-space|out:up+up8|1h|linear:contra": [
    { UpperArm: [-0.081, 0.093, 0.199], LowerArm: [0, -0.137, 0], Hand: [0.073, -0.131, -0.033] },
  ],
  // worst point 0.57 cm off, palm 16.1°, fingers 16.4°
  "path|neutral-space|out:up|1h|linear:out": [
    { UpperArm: [-0.451, -0.135, 0.149], LowerArm: [0, -0.841, 0], Hand: [0.149, 0.132, -0.051] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0°
  "path|neutral-space|out:up|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.023, 0.018, -0.593] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.5°
  "path|neutral-space|up:out|2h|linear:down": [
    { UpperArm: [-0.052, -0.091, -0.163], LowerArm: [0, -0.279, 0], Hand: [-0.003, 0.117, 0.24] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.6°
  "path|neutral-space|up:out|2h|linear:ipsi": [
    { UpperArm: [-0.06, -0.221, -0.041], LowerArm: [0, -0.04, 0], Hand: [-0.038, -0.178, -0.013] },
  ],
  // worst point 0.01 cm off, palm 0.7°, fingers 0.7°
  "path|neutral-space|up:out|2h|linear:out": [
    { UpperArm: [-0.352, -0.246, -0.118], LowerArm: [0, -0.608, 0], Hand: [0.15, 0.213, 0.144] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.5°
  "path|neutral-space|up:out|2h|linear:up": [
    { UpperArm: [-0.034, 0.058, 0.151], LowerArm: [0, 0.158, 0], Hand: [0.057, -0.091, -0.203] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|nose|contra:up+out4|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0, 0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, 0] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.9°
  "path|nose|contra:up|1h|linear:out+down": [
    { UpperArm: [0.19, -0.015, -0.064], LowerArm: [0, -0.151, 0], Hand: [-0.013, 0.335, -0.044] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|nose|contra:up|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0, 0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.001] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.1°
  "path|nose|down:contra+down3|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, -0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.797, 0, -0.002] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.8°
  "path|nose|in:up+down3|1h|linear:up": [
    { UpperArm: [-0.478, -0.109, 0.199], LowerArm: [0, -0.101, 0], Hand: [-0.071, -0.169, -0.256] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.4°
  "path|nose|in:up+out4|1h|linear:out": [
    { UpperArm: [-0.139, -0.138, -0.021], LowerArm: [0, -0.326, 0], Hand: [-0.107, 0.013, 0.19] },
  ],
  // worst point 0.01 cm off, palm 0.5°, fingers 2.2°
  "path|nose|in:up+out6|2h|linear:down": [
    { UpperArm: [0.182, 0.182, -0.474], LowerArm: [0, -0.1, 0], Hand: [-0.237, 0.439, 0.25] },
  ],
  // worst point 0.14 cm off, palm 8.3°, fingers 9.1°
  "path|shoulder|contra:up|2h|linear:down+contra": [
    { UpperArm: [0.031, 0.388, 0.017], LowerArm: [0, -0.28, 0], Hand: [0.655, 0.235, -0.5] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|shoulder|down:in|1h|tap": [
    { UpperArm: [-0.026, 0.016, 0.016], LowerArm: [0, -0.133, 0], Hand: [-0.006, 0.011, 0.101] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|shoulder|down:in|2h|tap": [
    { UpperArm: [-0.061, 0.021, 0.021], LowerArm: [0, -0.148, 0], Hand: [-0.004, 0.015, 0.08] },
  ],
  // worst point 0.05 cm off, palm 5.4°, fingers 1.6°
  "path|shoulder|out:up+up4|2h|linear:up": [
    { UpperArm: [-0.65, -0.113, -0.437], LowerArm: [0, 0.109, 0], Hand: [0.14, -0.381, 0.176] },
  ],
  // worst point 0.02 cm off, palm 0.5°, fingers 1.7°
  "path|weak-hand|contra:out+down10|1h|linear:down": [
    { UpperArm: [-0.171, -0.026, -0.029], LowerArm: [0, -0.598, 0], Hand: [0.022, 0.398, -0.064] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.8°
  "path|weak-hand|contra:out+down1|1h|linear:down": [
    { UpperArm: [0.04, 0.016, -0.078], LowerArm: [0, -0.22, 0], Hand: [-0.051, 0.265, -0.047] },
  ],
  // worst point 0.01 cm off, palm 0.2°, fingers 0.5°
  "path|weak-hand|contra:out+down1|1h|linear:out": [
    { UpperArm: [-0.329, -0.136, -0.045], LowerArm: [0, -0.551, 0], Hand: [-0.006, 0.204, -0.005] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.7°
  "path|weak-hand|contra:out+down1|1h|linear:up": [
    { UpperArm: [-0.119, 0.003, 0.061], LowerArm: [0, 0.131, 0], Hand: [0.026, -0.247, 0.024] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|weak-hand|contra:out+down1|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, 0, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.797, -0.001, -0.002] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.8°
  "path|weak-hand|contra:out+down2|1h|linear:down": [
    { UpperArm: [0.005, 0.025, -0.073], LowerArm: [0, -0.272, 0], Hand: [-0.05, 0.281, -0.055] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.5°
  "path|weak-hand|contra:out+down2|1h|linear:out": [
    { UpperArm: [-0.284, 0.006, 0.044], LowerArm: [0, -0.388, 0], Hand: [-0.041, 0.101, 0.101] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.8°
  "path|weak-hand|contra:out+down2|1h|linear:up": [
    { UpperArm: [-0.109, 0.002, 0.06], LowerArm: [0, 0.147, 0], Hand: [0.022, -0.253, 0.023] },
  ],
  // worst point 0.01 cm off, palm 0.8°, fingers 0.4°
  "path|weak-hand|contra:out+down3|1h|linear:down+ipsi": [
    { UpperArm: [0.054, 0.06, -0.242], LowerArm: [0, -0.008, 0], Hand: [-0.21, 0.13, 0.005] },
  ],
  // worst point 0.01 cm off, palm 0.2°, fingers 0.6°
  "path|weak-hand|contra:out+down3|1h|linear:out": [
    { UpperArm: [-0.347, -0.121, -0.034], LowerArm: [0, -0.573, 0], Hand: [-0.005, 0.211, 0.006] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.2°
  "path|weak-hand|contra:out+down3|1h|linear:out+up": [
    { UpperArm: [-0.278, -0.087, 0.013], LowerArm: [0, -0.24, 0], Hand: [-0.002, -0.047, 0.02] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.7°
  "path|weak-hand|contra:out+down3|1h|linear:up": [
    { UpperArm: [-0.116, -0.003, 0.059], LowerArm: [0, 0.136, 0], Hand: [0.019, -0.25, 0.019] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.3°
  "path|weak-hand|contra:out+down3|1h|tap": [
    { UpperArm: [-0.032, 0.001, 0.021], LowerArm: [0, 0.061, 0], Hand: [0.007, -0.093, 0.007] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|weak-hand|contra:out+down5+ipsi3|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, -0.001, 0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, 0, -0.001] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.7°
  "path|weak-hand|contra:out+down6|1h|linear:up": [
    { UpperArm: [-0.081, -0.001, 0.056], LowerArm: [0, 0.185, 0], Hand: [0.014, -0.264, 0.017] },
  ],
  // worst point 0.01 cm off, palm 0.9°, fingers 1.3°
  "path|weak-hand|contra:out+down8|1h|linear:down": [
    { UpperArm: [-0.001, 0.113, -0.018], LowerArm: [0, -0.329, 0], Hand: [-0.017, 0.298, -0.012] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.3°
  "path|weak-hand|contra:out+in10|1h|linear:out": [
    { UpperArm: [-0.241, -0.052, 0.031], LowerArm: [0, -0.319, 0], Hand: [-0.068, 0.108, 0.138] },
  ],
  // worst point 0 cm off, palm 0.8°, fingers 0.7°
  "path|weak-hand|contra:out+in4+down2|1h|linear:down": [
    { UpperArm: [0.049, 0.135, -0.088], LowerArm: [0, -0.25, 0], Hand: [-0.061, 0.308, -0.045] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.4°
  "path|weak-hand|contra:out+in4+down2|1h|linear:out": [
    { UpperArm: [-0.285, -0.04, 0.034], LowerArm: [0, -0.42, 0], Hand: [-0.035, 0.137, 0.105] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.4°
  "path|weak-hand|contra:out+in4+down5|1h|linear:out": [
    { UpperArm: [-0.303, -0.046, 0.058], LowerArm: [0, -0.442, 0], Hand: [-0.036, 0.144, 0.113] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.7°
  "path|weak-hand|contra:out+up3|1h|linear:up": [
    { UpperArm: [-0.158, 0.001, 0.062], LowerArm: [0, 0.07, 0], Hand: [0.04, -0.227, 0.025] },
  ],
  // worst point 0.01 cm off, palm 0.9°, fingers 0.6°
  "path|weak-hand|contra:out+up4|1h|linear:down": [
    { UpperArm: [0.022, 0.107, -0.171], LowerArm: [0, -0.163, 0], Hand: [-0.191, 0.226, -0.134] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 1.2°
  "path|weak-hand|contra:out|1h|linear:down": [
    { UpperArm: [0.112, 0.048, -0.036], LowerArm: [0, -0.219, 0], Hand: [0.064, 0.282, 0.031] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.5°
  "path|weak-hand|contra:out|1h|tap": [
    { UpperArm: [-0.063, 0.006, 0.003], LowerArm: [0, 0.063, 0], Hand: [-0.06, -0.091, -0.042] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|weak-hand|contra:out|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, 0, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.797, -0.001, -0.002] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0.2°
  "path|weak-hand|contra:up+down3|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, 0.001, -0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.796, -0.001, 0.002] },
  ],
  // worst point 0.01 cm off, palm 1.3°, fingers 2.4°
  "path|weak-hand|contra:up|1h|linear:down": [
    { UpperArm: [-0.054, 0.227, 0.105], LowerArm: [0, -0.369, 0], Hand: [0.185, 0.018, -0.425] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.6°
  "path|weak-hand|contra:up|1h|linear:ipsi": [
    { UpperArm: [0.205, -0.225, -0.216], LowerArm: [0, 0.199, 0], Hand: [-0.026, 0.135, 0.095] },
  ],
  // worst point 0.09 cm off, palm 4°, fingers 16.4°
  "path|weak-hand|contra:up|1h|linear:out": [
    { UpperArm: [-0.355, -0.256, 0.307], LowerArm: [0, -0.438, 0], Hand: [-0.019, 0.327, 0.196] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.7°
  "path|weak-hand|contra:up|1h|tap": [
    { UpperArm: [-0.023, -0.018, -0.022], LowerArm: [0, 0.082, 0], Hand: [-0.094, -0.03, 0.104] },
  ],
  // worst point 0.01 cm off, palm 0.2°, fingers 0.1°
  "path|weak-hand|down:contra+down1|1h|linear:contra": [
    { UpperArm: [-0.491, 0.091, 0.561], LowerArm: [0, -0.276, 0], Hand: [0.08, -0.031, 0.001] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|weak-hand|down:contra+down2|1h|tap": [
    { UpperArm: [-0.126, -0.088, 0.102], LowerArm: [0, 0.068, 0], Hand: [-0.019, -0.001, 0.124] },
  ],
  // worst point 0.01 cm off, palm 3.8°, fingers 1.9°
  "path|weak-hand|down:contra+down3|1h|linear:down+contra": [
    { UpperArm: [0.002, 0.091, 0.153], LowerArm: [0, -0.214, 0], Hand: [0.38, -0.062, -0.306] },
  ],
  // worst point 0.01 cm off, palm 2.8°, fingers 1.2°
  "path|weak-hand|down:contra+down3|1h|linear:down+ipsi": [
    { UpperArm: [-0.003, -0.292, 0.048], LowerArm: [0, -0.168, 0], Hand: [0.182, 0.292, 0.025] },
  ],
  // worst point 0.01 cm off, palm 2.7°, fingers 1.3°
  "path|weak-hand|down:contra+down3|1h|linear:up": [
    { UpperArm: [-0.119, -0.045, -0.002], LowerArm: [0, 0.166, 0], Hand: [-0.326, -0.147, 0.34] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|weak-hand|down:contra+down3|1h|tap": [
    { UpperArm: [-0.123, -0.087, 0.099], LowerArm: [0, 0.067, 0], Hand: [-0.019, -0.001, 0.123] },
  ],
  // worst point 0.03 cm off, palm 1.5°, fingers 2.4°
  "path|weak-hand|down:contra+up4|1h|linear:out": [
    { UpperArm: [-0.44, -0.36, 0.506], LowerArm: [0, -0.606, 0], Hand: [0.37, 0.372, 0.079] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.3°
  "path|weak-hand|down:contra+up6|1h|tap": [
    { UpperArm: [-0.097, -0.097, 0.089], LowerArm: [0, 0.016, 0], Hand: [-0.023, -0.012, 0.135] },
  ],
  // worst point 0.01 cm off, palm 3.5°, fingers 1.3°
  "path|weak-hand|down:contra|1h|linear:down": [
    { UpperArm: [0.077, -0.107, 0.112], LowerArm: [0, -0.203, 0], Hand: [0.355, 0.187, -0.216] },
  ],
  // worst point 0.03 cm off, palm 1°, fingers 2.8°
  "path|weak-hand|down:contra|1h|linear:out": [
    { UpperArm: [-0.537, -0.309, 0.582], LowerArm: [0, -0.635, 0], Hand: [0.383, 0.368, 0.017] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.3°
  "path|weak-hand|down:contra|1h|tap": [
    { UpperArm: [-0.099, -0.092, 0.087], LowerArm: [0, 0.019, 0], Hand: [-0.029, -0.014, 0.136] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|weak-hand|down:out+contra+down2|1h|tap": [
    { UpperArm: [-0.047, -0.013, -0.02], LowerArm: [0, 0.065, 0], Hand: [-0.034, -0.033, 0.064] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|weak-hand|down:out+contra+down3|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0.001, 0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, 0] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.3°
  "path|weak-hand|down:out+contra+down4|1h|tap": [
    { UpperArm: [-0.049, -0.013, 0.003], LowerArm: [0, 0.071, 0], Hand: [-0.039, -0.027, 0.104] },
  ],
  // worst point 0 cm off, palm 0.9°, fingers 0.8°
  "path|weak-hand|down:out+contra|1h|linear:down": [
    { UpperArm: [0.13, 0.022, 0.014], LowerArm: [0, -0.206, 0], Hand: [0.123, 0.089, -0.283] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.3°
  "path|weak-hand|down:out+contra|1h|tap": [
    { UpperArm: [-0.069, -0.008, 0.005], LowerArm: [0, 0.051, 0], Hand: [-0.038, -0.035, 0.101] },
  ],
  // worst point 0 cm off, palm 0.8°, fingers 0.5°
  "path|weak-hand|down:out+down1|1h|linear:down": [
    { UpperArm: [0.031, -0.099, 0.202], LowerArm: [0, -0.231, 0], Hand: [0.068, 0.17, -0.231] },
  ],
  // worst point 0.01 cm off, palm 2.8°, fingers 1.2°
  "path|weak-hand|down:out+down1|1h|linear:up": [
    { UpperArm: [-0.166, -0.026, -0.019], LowerArm: [0, 0.134, 0], Hand: [0.108, -0.061, 0.309] },
  ],
  // worst point 0.01 cm off, palm 2.4°, fingers 0.8°
  "path|weak-hand|down:out+down1|1h|tap": [
    { UpperArm: [-0.089, -0.006, 0.005], LowerArm: [0, 0.047, 0], Hand: [-0.027, -0.037, 0.049] },
  ],
  // worst point 0.01 cm off, palm 0.5°, fingers 0.7°
  "path|weak-hand|down:out+down2|1h|linear:out": [
    { UpperArm: [-0.41, -0.047, 0.337], LowerArm: [0, -0.55, 0], Hand: [-0.02, 0.319, -0.109] },
  ],
  // worst point 0.01 cm off, palm 2.9°, fingers 1.2°
  "path|weak-hand|down:out+down2|1h|linear:up": [
    { UpperArm: [-0.169, -0.036, -0.011], LowerArm: [0, 0.133, 0], Hand: [0.122, -0.055, 0.317] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|weak-hand|down:out+down2|1h|tap": [
    { UpperArm: [-0.056, 0.029, -0.066], LowerArm: [0, 0.051, 0], Hand: [-0.059, -0.057, 0.063] },
  ],
  // worst point 0.01 cm off, palm 2.4°, fingers 1°
  "path|weak-hand|down:out+down3|1h|arc:up": [
    { UpperArm: [-0.132, 0.038, -0.009], LowerArm: [0, -0.041, 0], Hand: [-0.052, 0.014, 0.08] },
    { UpperArm: [-0.136, 0.01, -0.072], LowerArm: [0, 0.148, 0], Hand: [0.05, -0.087, 0.281] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 0.7°
  "path|weak-hand|down:out+down3|1h|linear:out": [
    { UpperArm: [-0.282, -0.062, 0.191], LowerArm: [0, -0.317, 0], Hand: [-0.05, 0.259, -0.009] },
  ],
  // worst point 0.01 cm off, palm 3.5°, fingers 1.5°
  "path|weak-hand|down:out+down3|1h|linear:up": [
    { UpperArm: [-0.166, 0.042, -0.115], LowerArm: [0, 0.154, 0], Hand: [-0.097, -0.131, 0.182] },
  ],
  // worst point 0.01 cm off, palm 2.9°, fingers 1.1°
  "path|weak-hand|down:out+down3|1h|tap": [
    { UpperArm: [-0.093, -0.087, 0.073], LowerArm: [0, 0.047, 0], Hand: [0.158, 0.032, 0.178] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0°
  "path|weak-hand|down:out+down3|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.788, 0, 0.012] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.789, -0.001, -0.01] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 0.6°
  "path|weak-hand|down:out+in6+down4|1h|linear:out": [
    { UpperArm: [-0.318, -0.048, 0.223], LowerArm: [0, -0.39, 0], Hand: [-0.047, 0.263, -0.053] },
  ],
  // worst point 0.01 cm off, palm 3.3°, fingers 0.8°
  "path|weak-hand|down:out+in8+up4|1h|arc:out": [
    { UpperArm: [-0.217, -0.092, 0.192], LowerArm: [0, -0.136, 0], Hand: [0.113, 0.165, 0.124] },
    { UpperArm: [-0.242, -0.063, 0.227], LowerArm: [0, -0.351, 0], Hand: [0.004, 0.304, -0.027] },
  ],
  // worst point 0.02 cm off, palm 4.9°, fingers 3°
  "path|weak-hand|down:out+up3|1h|linear:up": [
    { UpperArm: [-0.276, -0.233, 0.235], LowerArm: [0, 0.076, 0], Hand: [0.46, 0.112, 0.491] },
  ],
  // worst point 0.02 cm off, palm 4.2°, fingers 3.1°
  "path|weak-hand|down:out+up5|1h|linear:up": [
    { UpperArm: [-0.272, -0.267, 0.261], LowerArm: [0, 0.047, 0], Hand: [0.482, 0.168, 0.482] },
  ],
  // worst point 0 cm off, palm 1°, fingers 0.6°
  "path|weak-hand|down:out|1h|linear:down": [
    { UpperArm: [0.101, -0.087, 0.209], LowerArm: [0, -0.172, 0], Hand: [0.119, 0.17, -0.204] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.2°
  "path|weak-hand|down:out|1h|tap": [
    { UpperArm: [-0.044, 0.02, -0.045], LowerArm: [0, 0.048, 0], Hand: [-0.019, -0.038, 0.079] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|weak-hand|in:contra+down1|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, -0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.797, 0, -0.002] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|weak-hand|in:contra+down3|1h|linear:contra": [
    { UpperArm: [-0.169, 0.061, 0.217], LowerArm: [0, -0.294, 0], Hand: [0.067, 0.107, -0.122] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.6°
  "path|weak-hand|in:contra+down4|1h|linear:ipsi": [
    { UpperArm: [-0.052, -0.264, -0.067], LowerArm: [0, -0.017, 0], Hand: [0.098, 0, 0.265] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 0.4°
  "path|weak-hand|in:contra+down7|1h|linear:up": [
    { UpperArm: [-0.074, -0.031, 0.01], LowerArm: [0, 0.214, 0], Hand: [-0.03, -0.271, -0.011] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.3°
  "path|weak-hand|in:contra+in3+down5|1h|linear:in": [
    { UpperArm: [0.277, 0.118, -0.129], LowerArm: [0, 0.379, 0], Hand: [-0.075, -0.083, -0.189] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 0.5°
  "path|weak-hand|in:contra+in3+down5|1h|linear:up": [
    { UpperArm: [-0.102, -0.039, 0.021], LowerArm: [0, 0.191, 0], Hand: [-0.04, -0.271, -0.011] },
  ],
  // worst point 0.01 cm off, palm 0.9°, fingers 1.2°
  "path|weak-hand|in:contra|1h|linear:down": [
    { UpperArm: [-0.026, 0.044, 0.046], LowerArm: [0, -0.382, 0], Hand: [0.034, 0.328, 0.02] },
  ],
  // worst point 0.01 cm off, palm 1.1°, fingers 1.1°
  "path|weak-hand|in:contra|1h|linear:out": [
    { UpperArm: [-0.351, 0.125, 0.076], LowerArm: [0, -0.644, 0], Hand: [0.017, 0.24, 0.083] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|weak-hand|in:contra|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, -0.001, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.797, 0, -0.002] },
  ],
  // worst point 0.02 cm off, palm 1.4°, fingers 3.9°
  "path|weak-hand|in:down+down4|1h|linear:up": [
    { UpperArm: [-0.171, -0.38, 0.217], LowerArm: [0, 0.05, 0], Hand: [0.469, 0.193, 0.36] },
  ],
  // worst point 0.01 cm off, palm 0.9°, fingers 2.8°
  "path|weak-hand|in:down+down9|1h|linear:up": [
    { UpperArm: [0.036, -0.107, -0.09], LowerArm: [0, 0.359, 0], Hand: [0.243, -0.137, 0.361] },
  ],
  // worst point 0.13 cm off, palm 3.9°, fingers 6.9°
  "path|weak-hand|in:down+up4|1h|linear:out": [
    { UpperArm: [-0.249, -0.655, 0.443], LowerArm: [0, -0.576, 0], Hand: [0.692, 0.458, 0.076] },
  ],
  // worst point 0.01 cm off, palm 1°, fingers 1.4°
  "path|weak-hand|in:up+down4|1h|tap": [
    { UpperArm: [0.182, 0.1, 0.064], LowerArm: [0, 0.448, 0], Hand: [0.001, -0.118, -0.233] },
  ],
  // worst point 0.01 cm off, palm 0.9°, fingers 1.3°
  "path|weak-hand|in:up+out3+down4|1h|tap": [
    { UpperArm: [0.179, 0.092, 0.077], LowerArm: [0, 0.428, 0], Hand: [-0.001, -0.141, -0.21] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|weak-hand|ipsi:out|1h|tap": [
    { UpperArm: [-0.116, -0.086, 0.103], LowerArm: [0, 0.036, 0], Hand: [0.009, 0.11, 0.003] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|weak-hand|out:up+down1|1h|linear:ipsi": [
    { UpperArm: [0.183, -0.038, -0.252], LowerArm: [0, 0.276, 0], Hand: [-0.055, 0.089, 0.101] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.2°
  "path|weak-hand|up:contra+down14|1h|tap": [
    { UpperArm: [0.116, -0.017, 0.093], LowerArm: [0, 0.234, 0], Hand: [0.007, -0.152, -0.04] },
  ],
  // worst point 0.16 cm off, palm 0.6°, fingers 7.8°
  "path|weak-hand|up:out+contra+down3|1h|arc:contra": [
    { UpperArm: [-0.178, 0.053, -0.114], LowerArm: [0, -0.093, 0], Hand: [-0.187, -0.005, -0.188] },
    { UpperArm: [-0.148, 0.039, -0.095], LowerArm: [0, -0.295, 0], Hand: [-0.084, 0.24, -0.086] },
  ],
  // worst point 0.01 cm off, palm 0.4°, fingers 0.4°
  "path|weak-hand|up:out+down3|1h|arc:out": [
    { UpperArm: [-0.17, -0.062, 0.003], LowerArm: [0, -0.182, 0], Hand: [-0.007, -0.014, 0.007] },
    { UpperArm: [-0.324, -0.173, -0.01], LowerArm: [0, -0.561, 0], Hand: [-0.026, -0.012, 0.221] },
  ],
  // worst point 0.01 cm off, palm 0.4°, fingers 0.4°
  "path|weak-hand|up:out+down3|1h|linear:out": [
    { UpperArm: [-0.324, -0.173, -0.01], LowerArm: [0, -0.561, 0], Hand: [-0.026, -0.012, 0.221] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.2°
  "path|weak-hand|up:out+down3|1h|tap": [
    { UpperArm: [-0.036, 0.012, 0.012], LowerArm: [0, 0.065, 0], Hand: [0.026, -0.011, -0.102] },
  ],
  // worst point 0.05 cm off, palm 0.8°, fingers 1.8°
  "path|weak-hand|up:out+down9|1h|linear:out": [
    { UpperArm: [-0.156, -0.479, 0.05], LowerArm: [0, -0.876, 0], Hand: [0.077, 0.335, -0.014] },
  ],
  // worst point 0.73 cm off, palm 5.4°, fingers 18°
  "path|weak-hand|up:out+down9|1h|linear:up": [
    { UpperArm: [-0.373, 0.111, -0.242], LowerArm: [0, 0.24, 0], Hand: [-0.212, -0.395, -0.417] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.6°
  "site|belly|in:contra|A|thumb|1h": [
    { UpperArm: [-0.125, -0.011, -0.008], LowerArm: [0, -0.289, 0], Hand: [-0.04, 0.149, 0.11] },
  ],
  // point 0.12 cm off, palm 7.1°, fingers 15.4°
  "site|cheek|contra:out|L|thumb|1h": [
    { UpperArm: [-0.183, -1.312, -0.437], LowerArm: [0, 0.014, 0], Hand: [-0.775, -1.024, 0.912] },
  ],
  // point 0.01 cm off, palm 0.4°, fingers 1.2°
  "site|cheek|contra:up|A|thumb|1h": [
    { UpperArm: [-0.576, -0.083, 0.102], LowerArm: [0, -0.17, 0], Hand: [-0.102, -0.368, 0.124] },
  ],
  // point 0.02 cm off, palm 1.2°, fingers 3.7°
  "site|cheek|contra:up|F|index|1h": [
    { UpperArm: [-0.528, -0.357, -0.034], LowerArm: [0, -0.03, 0], Hand: [-0.363, -0.479, 0.176] },
  ],
  // point 0.5 cm off, palm 44°, fingers 36.9°
  "site|cheek|down:contra|X|index|1h": [
    { UpperArm: [0.115, 0.231, 0.139], LowerArm: [0, -0.049, 0], Hand: [-0.21, -0.252, -0.57] },
  ],
  // point 0 cm off, palm 0.8°, fingers 1.2°
  "site|cheek|in:contra|Y|thumb|1h": [
    { UpperArm: [0.156, 0.483, 0.065], LowerArm: [0, -0.127, 0], Hand: [0.146, -0.266, -0.246] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.7°
  "site|cheek|in:up|flat_o|fingertips|1h": [
    { UpperArm: [-0.578, -0.263, 0.076], LowerArm: [0, -0.362, 0], Hand: [-0.23, -0.145, -0.134] },
  ],
  // point 0.09 cm off, palm 0.7°, fingers 2°
  "site|cheek|in:up|open_b|palm|1h": [
    { UpperArm: [-0.682, -0.273, 0.356], LowerArm: [0, -0.161, 0], Hand: [-0.058, -0.394, -0.396] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|chest-front|contra:out|A|palm|1h": [
    { UpperArm: [0.007, -0.046, -0.03], LowerArm: [0, 0.019, 0], Hand: [-0.029, 0.001, 0.028] },
  ],
  // point 0.1 cm off, palm 3.6°, fingers 3.4°
  "site|chest-front|down:out+out6|open_b|fingertips|1h": [
    { UpperArm: [0.311, 0.081, 0.016], LowerArm: [0, 0.475, 0], Hand: [0.909, -0.125, 0.706] },
  ],
  // point 0.03 cm off, palm 2.5°, fingers 4.8°
  "site|chest|contra:up|5|thumb|1h": [
    { UpperArm: [-0.298, -0.021, -0.163], LowerArm: [0, 0.129, 0], Hand: [-0.753, 0.581, 0.313] },
  ],
  // point 0.03 cm off, palm 2.5°, fingers 4.8°
  "site|chest|contra:up|curved_5|thumb|1h": [
    { UpperArm: [-0.3, -0.019, -0.163], LowerArm: [0, 0.129, 0], Hand: [-0.756, 0.583, 0.315] },
  ],
  // point 0.01 cm off, palm 1.3°, fingers 0.8°
  "site|chest|in:contra+contra10|open_b|palm|2h": [
    { UpperArm: [-0.244, 0.575, 0.052], LowerArm: [0, -0.182, 0], Hand: [-0.116, -0.064, -0.562] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.3°
  "site|chest|in:contra+ipsi4|C|fingertips|2h": [
    { UpperArm: [-0.134, 0.245, 0.118], LowerArm: [0, -0.134, 0], Hand: [0.137, -0.068, -0.154] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 0.7°
  "site|chest|in:contra+up4|5|palm|2h": [
    { UpperArm: [0.011, 0.526, 0.181], LowerArm: [0, 0.047, 0], Hand: [0.152, -0.183, -0.428] },
  ],
  // point 0.01 cm off, palm 0.6°, fingers 0.6°
  "site|chest|in:contra|A|palm|1h": [
    { UpperArm: [0.024, 0.481, 0.173], LowerArm: [0, 0.056, 0], Hand: [0.196, -0.164, -0.373] },
  ],
  // point 0.01 cm off, palm 0.6°, fingers 0.6°
  "site|chest|in:contra|A|thumb|1h": [
    { UpperArm: [0.064, 0.361, 0.142], LowerArm: [0, -0.055, 0], Hand: [0.205, 0.002, -0.24] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.4°
  "site|chest|in:contra|C|fingertips|1h": [
    { UpperArm: [-0.209, 0.279, 0.06], LowerArm: [0, -0.178, 0], Hand: [0.132, -0.115, -0.147] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.3°
  "site|chest|in:contra|C|fingertips|2h": [
    { UpperArm: [-0.193, 0.244, 0.102], LowerArm: [0, -0.181, 0], Hand: [0.126, -0.072, -0.139] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.4°
  "site|chest|in:contra|curved_5|fingertips|1h": [
    { UpperArm: [-0.206, 0.279, 0.061], LowerArm: [0, -0.18, 0], Hand: [0.133, -0.109, -0.147] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.3°
  "site|chest|in:contra|open_8|fingertips|1h": [
    { UpperArm: [-0.093, 0.151, 0.016], LowerArm: [0, -0.015, 0], Hand: [0.073, -0.124, -0.089] },
  ],
  // point 0.01 cm off, palm 0.6°, fingers 0.6°
  "site|chest|in:contra|open_b|palm|1h": [
    { UpperArm: [0.024, 0.481, 0.173], LowerArm: [0, 0.056, 0], Hand: [0.196, -0.164, -0.373] },
  ],
  // point 0.01 cm off, palm 0.6°, fingers 0.6°
  "site|chest|in:contra|open_b|palm|2h": [
    { UpperArm: [0.024, 0.481, 0.173], LowerArm: [0, 0.056, 0], Hand: [0.196, -0.164, -0.373] },
  ],
  // point 0.01 cm off, palm 2.5°, fingers 2.8°
  "site|chest|in:up+contra13+up5|L|palm|1h": [
    { UpperArm: [-0.201, -0.15, 0.176], LowerArm: [0, 0.285, 0], Hand: [0.356, -0.184, -0.525] },
  ],
  // point 0.01 cm off, palm 0.3°, fingers 1.4°
  "site|chest|in:up+contra6|C|fingertips|1h": [
    { UpperArm: [-0.262, 0.09, -0.046], LowerArm: [0, -0.045, 0], Hand: [-0.226, 0.066, -0.082] },
  ],
  // point 0.01 cm off, palm 0.5°, fingers 0.7°
  "site|chest|in:up|bent_b|fingertips|2h": [
    { UpperArm: [-0.297, 0.018, -0.047], LowerArm: [0, 0.126, 0], Hand: [-0.026, 0.001, -0.466] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.3°
  "site|chest|in:up|open_8|fingertips|1h": [
    { UpperArm: [-0.035, -0.019, -0.016], LowerArm: [0, 0.094, 0], Hand: [-0.019, -0.005, -0.172] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.3°
  "site|chest|in:up|open_8|fingertips|2h": [
    { UpperArm: [-0.035, -0.019, -0.016], LowerArm: [0, 0.094, 0], Hand: [-0.019, -0.005, -0.172] },
  ],
  // point 0.01 cm off, palm 0.8°, fingers 1.3°
  "site|chest|in:up|open_b|palm|1h": [
    { UpperArm: [-0.061, -0.004, -0.057], LowerArm: [0, 0.45, 0], Hand: [0.118, -0.01, -0.532] },
  ],
  // point 0.02 cm off, palm 2.1°, fingers 1.3°
  "site|chest|up:in|C|fingertips|2h": [
    { UpperArm: [0.101, -0.137, 0.215], LowerArm: [0, 0.158, 0], Hand: [0.298, -0.063, 0.009] },
  ],
  // point 0 cm off, palm 0.5°, fingers 0.8°
  "site|chin|contra:up|1|index|1h": [
    { UpperArm: [0.001, 0.059, -0.002], LowerArm: [0, -0.011, 0], Hand: [0.085, -0.092, -0.096] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|chin|contra:up|4|index|1h": [
    { UpperArm: [-0.007, -0.008, 0.082], LowerArm: [0, -0.048, 0], Hand: [0.071, -0.018, -0.026] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1°
  "site|chin|contra:up|5|thumb|1h": [
    { UpperArm: [-0.676, -0.286, -0.04], LowerArm: [0, -0.225, 0], Hand: [-0.591, -0.16, 0.184] },
  ],
  // point 0.01 cm off, palm 0.7°, fingers 1.2°
  "site|chin|contra:up|A|thumb|1h": [
    { UpperArm: [-0.546, -0.122, 0.187], LowerArm: [0, -0.043, 0], Hand: [-0.296, -0.325, 0.23] },
  ],
  // point 0.02 cm off, palm 1.2°, fingers 2.6°
  "site|chin|contra:up|C|thumb|1h": [
    { UpperArm: [-0.497, -0.317, 0.097], LowerArm: [0, 0.085, 0], Hand: [-0.43, -0.362, 0.232] },
  ],
  // point 0.02 cm off, palm 1.2°, fingers 2.7°
  "site|chin|contra:up|F|index|1h": [
    { UpperArm: [-0.451, -0.331, -0.048], LowerArm: [0, 0.086, 0], Hand: [-0.545, -0.22, 0.179] },
  ],
  // point 0.01 cm off, palm 1°, fingers 1°
  "site|chin|contra:up|L|thumb|1h": [
    { UpperArm: [-0.675, -0.295, -0.049], LowerArm: [0, -0.215, 0], Hand: [-0.603, -0.163, 0.185] },
  ],
  // point 0.04 cm off, palm 7.6°, fingers 4.3°
  "site|chin|in:contra|H|fingertips|1h": [
    { UpperArm: [-0.227, -0.04, 0.667], LowerArm: [0, -0.086, 0], Hand: [0.675, -1.03, 0.252] },
  ],
  // point 0.02 cm off, palm 4.5°, fingers 2.8°
  "site|chin|in:contra|Y|fingertips|1h": [
    { UpperArm: [-0.097, 0.366, 0.955], LowerArm: [0, -0.181, 0], Hand: [0.711, -0.902, -0.252] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.5°
  "site|chin|in:up+contra2|R|fingertips|1h": [
    { UpperArm: [-0.175, -0.07, 0.145], LowerArm: [0, 0.061, 0], Hand: [0.009, -0.151, -0.142] },
  ],
  // point 0.05 cm off, palm 5.2°, fingers 5.6°
  "site|chin|in:up+contra|open_b|fingertips|1h": [
    { UpperArm: [-0.086, -0.136, -0.015], LowerArm: [0, 0.028, 0], Hand: [-0.181, -0.14, -0.061] },
  ],
  // point 0.01 cm off, palm 0.5°, fingers 0.7°
  "site|chin|in:up+ipsi2|R|fingertips|1h": [
    { UpperArm: [-0.198, -0.065, 0.114], LowerArm: [0, 0.069, 0], Hand: [-0.017, -0.148, -0.201] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.6°
  "site|chin|in:up|1|index|1h": [
    { UpperArm: [-0.019, 0.052, -0.011], LowerArm: [0, -0.014, 0], Hand: [0.036, 0.055, -0.053] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.3°
  "site|chin|in:up|open_8|fingertips|1h": [
    { UpperArm: [-0.193, -0.089, 0.074], LowerArm: [0, -0.018, 0], Hand: [-0.089, -0.068, -0.091] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|chin|in:up|open_b|fingertips|1h": [
    { UpperArm: [0.035, -0.039, -0.094], LowerArm: [0, 0.044, 0], Hand: [-0.062, 0.039, -0.003] },
  ],
  // point 2.54 cm off, palm 9.1°, fingers 12°
  "site|ear|contra:up|A|thumb|1h": [
    { UpperArm: [-0.24, 0.542, -0.291], LowerArm: [0, -0.158, 0], Hand: [-0.023, -0.048, -0.749] },
  ],
  // point 0 cm off, palm 0.4°, fingers 1°
  "site|eye|in:up+down2|V|index|1h": [
    { UpperArm: [-0.042, 0.172, 0.014], LowerArm: [0, -0.053, 0], Hand: [0.127, 0.182, -0.048] },
  ],
  // point 0.01 cm off, palm 0.4°, fingers 1.1°
  "site|forearm|contra:out+down3|open_b|pinky-side|1h": [
    { UpperArm: [-0.078, 0.047, -0.014], LowerArm: [0, 0.05, 0], Hand: [-0.199, -0.074, -0.192] },
  ],
  // point 0.02 cm off, palm 2.3°, fingers 3.7°
  "site|forearm|down:contra+down3|1|index|1h": [
    { UpperArm: [0.086, -0.63, 0.04], LowerArm: [0, 0.144, 0], Hand: [-0.332, 0.514, 0.366] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.2°
  "site|forearm|down:contra+down3|open_b|palm|1h": [
    { UpperArm: [-0.026, -0.005, -0.001], LowerArm: [0, 0.035, 0], Hand: [-0.061, 0.018, 0.054] },
  ],
  // point 0.02 cm off, palm 3.3°, fingers 3.2°
  "site|forehead|contra:out|L|thumb|1h": [
    { UpperArm: [0.282, -0.427, -0.119], LowerArm: [0, -0.02, 0], Hand: [-0.126, -0.481, 0.107] },
  ],
  // point 0.01 cm off, palm 0.1°, fingers 0.7°
  "site|forehead|contra:up+out+ipsi4+out4|1|index|1h": [
    { UpperArm: [-0.045, 0.017, 0.108], LowerArm: [0, -0.008, 0], Hand: [0.058, -0.134, -0.056] },
  ],
  // point 0 cm off, palm 0.8°, fingers 1°
  "site|forehead|contra:up|5|thumb|1h": [
    { UpperArm: [-0.311, -0.249, -0.049], LowerArm: [0, -0.499, 0], Hand: [-0.213, 0.269, 0.233] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.2°
  "site|forehead|contra:up|A|thumb|1h": [
    { UpperArm: [-0.356, -0.104, 0.074], LowerArm: [0, -0.323, 0], Hand: [-0.082, 0.062, 0.065] },
  ],
  // point 0.17 cm off, palm 16.4°, fingers 18.9°
  "site|forehead|down:contra|1|index|1h": [
    { UpperArm: [-0.002, -0.004, 0], LowerArm: [0, 0.001, 0], Hand: [0.032, 0.015, 0.019] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.4°
  "site|forehead|in:up+contra|open_8|fingertips|1h": [
    { UpperArm: [-0.131, 0.064, 0], LowerArm: [0, -0.145, 0], Hand: [-0.058, 0.011, -0.078] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.2°
  "site|forehead|in:up+ipsi4+out4|1|index|1h": [
    { UpperArm: [0.004, 0.025, 0.01], LowerArm: [0, -0.003, 0], Hand: [0.033, 0.037, 0.009] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.4°
  "site|forehead|in:up|1|index|1h": [
    { UpperArm: [-0.008, 0.035, 0.005], LowerArm: [0, -0.014, 0], Hand: [0.045, 0.068, 0.001] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|forehead|in:up|open_8|fingertips|1h": [
    { UpperArm: [-0.102, -0.128, 0.037], LowerArm: [0, -0.118, 0], Hand: [0.001, -0.011, -0.015] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.9°
  "site|head|contra:up+ipsi4|F|index|1h": [
    { UpperArm: [-0.499, -0.149, -0.165], LowerArm: [0, -0.253, 0], Hand: [-0.113, -0.219, 0.084] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 2.9°
  "site|head|in:up+contra|B|fingertips|1h": [
    { UpperArm: [-0.159, -0.109, -0.015], LowerArm: [0, -0.046, 0], Hand: [-0.335, -0.128, -0.274] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.3°
  "site|head|in:up+contra|flat_o|fingertips|1h": [
    { UpperArm: [-0.243, 0.381, 0.074], LowerArm: [0, -0.467, 0], Hand: [0.129, 0.024, 0.011] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.5°
  "site|head|in:up+contra|open_b|fingertips|1h": [
    { UpperArm: [-0.061, -0.056, -0.008], LowerArm: [0, -0.026, 0], Hand: [-0.063, -0.04, -0.031] },
  ],
  // point 0.06 cm off, palm 2.7°, fingers 4.5°
  "site|mouth|contra:out+up|C|thumb|1h": [
    { UpperArm: [-0.418, -0.696, 0.235], LowerArm: [0, -0.044, 0], Hand: [-0.407, -0.322, 0.406] },
  ],
  // point 0.13 cm off, palm 11.1°, fingers 10°
  "site|mouth|contra:out|C|thumb|1h": [
    { UpperArm: [-0.21, -0.761, 0.468], LowerArm: [0, -0.079, 0], Hand: [-0.276, -0.645, 0.099] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.2°
  "site|mouth|contra:up|1|index|1h": [
    { UpperArm: [-0.006, 0.029, 0.032], LowerArm: [0, -0.034, 0], Hand: [0.092, -0.002, -0.064] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.9°
  "site|mouth|contra:up|A|thumb|1h": [
    { UpperArm: [-0.511, -0.132, 0.202], LowerArm: [0, -0.131, 0], Hand: [-0.132, -0.266, 0.153] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|mouth|in:up|1|index|1h": [
    { UpperArm: [-0.004, 0.033, 0.015], LowerArm: [0, -0.007, 0], Hand: [0.034, 0.028, -0.03] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.5°
  "site|mouth|in:up|flat_o|fingertips|1h": [
    { UpperArm: [-0.566, -0.206, 0.126], LowerArm: [0, -0.316, 0], Hand: [-0.222, -0.144, -0.12] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.3°
  "site|mouth|in:up|open_8|fingertips|1h": [
    { UpperArm: [-0.176, -0.093, 0.06], LowerArm: [0, -0.041, 0], Hand: [-0.081, -0.066, -0.087] },
  ],
  // point 0.15 cm off, palm 13.9°, fingers 18.4°
  "site|neck|contra:up|F|index|1h": [
    { UpperArm: [-0.192, -0.179, 0.012], LowerArm: [0, 0.24, 0], Hand: [-0.455, -0.392, 0.073] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|neutral-space-high|in:up|Y|fingertips|1h": [
    { UpperArm: [-0.105, -0.012, -0.046], LowerArm: [0, -0.162, 0], Hand: [-0.004, 0.014, 0.081] },
  ],
  // point 0 cm off, palm 0.6°, fingers 0.6°
  "site|neutral-space-high|out:up|open_b|fingertips|1h": [
    { UpperArm: [0.289, -0.042, 0.039], LowerArm: [0, -0.023, 0], Hand: [0.05, 0.037, -0.292] },
  ],
  // point 0.01 cm off, palm 2°, fingers 1.9°
  "site|neutral-space|down:out+up10+out6|5|fingertips|1h": [
    { UpperArm: [0.34, -0.335, 0.014], LowerArm: [0, 0.742, 0], Hand: [0.487, -0.003, 0.474] },
  ],
  // point 0.01 cm off, palm 1.5°, fingers 1.5°
  "site|neutral-space|down:out+up8|1|index|1h": [
    { UpperArm: [0.33, -0.206, 0.003], LowerArm: [0, 0.611, 0], Hand: [0.303, 0.046, 0.343] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.3°
  "site|nose|contra:up|1|index|1h": [
    { UpperArm: [-0.007, 0.03, 0.012], LowerArm: [0, -0.034, 0], Hand: [0.089, 0.021, -0.078] },
  ],
  // point 0 cm off, palm 0.5°, fingers 0.4°
  "site|nose|contra:up|3|thumb|1h": [
    { UpperArm: [-0.552, -0.385, 0.018], LowerArm: [0, -0.368, 0], Hand: [-0.26, -0.107, 0.158] },
  ],
  // point 0.22 cm off, palm 16.3°, fingers 16.4°
  "site|nose|down:out+out6+down4|1|index|1h": [
    { UpperArm: [-0.002, 0.589, 0.905], LowerArm: [0, -0.056, 0], Hand: [1.651, 0.795, 0.248] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.6°
  "site|nose|in:up|H|fingertips|1h": [
    { UpperArm: [-0.187, -0.093, 0.111], LowerArm: [0, -0.007, 0], Hand: [-0.035, -0.109, -0.142] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.5°
  "site|nose|in:up|flat_o|fingertips|1h": [
    { UpperArm: [-0.497, -0.273, 0.145], LowerArm: [0, -0.37, 0], Hand: [-0.146, -0.125, -0.09] },
  ],
  // point 0.02 cm off, palm 3.1°, fingers 2.6°
  "site|shoulder|contra:up|A|thumb|2h": [
    { UpperArm: [-0.305, -0.054, -0.024], LowerArm: [0, 0.202, 0], Hand: [-0.644, -0.42, 0.479] },
  ],
  // point 0 cm off, palm 0°, fingers 0°
  "site|shoulder|down:in+out8|1|index|1h": [
    { UpperArm: [-0.002, 0.016, 0.001], LowerArm: [0, -0.003, 0], Hand: [0.004, -0.002, 0.002] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.4°
  "site|shoulder|down:in|curved_5|fingertips|1h": [
    { UpperArm: [-0.166, -0.068, 0.009], LowerArm: [0, 0.222, 0], Hand: [0.031, 0.073, -0.376] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|shoulder|down:in|flat_b|fingertips|2h": [
    { UpperArm: [-0.003, -0.074, -0.001], LowerArm: [0, -0.002, 0], Hand: [0.002, 0.085, 0.012] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|contra:out+down1|1|pinky-side|1h": [
    { UpperArm: [-0.033, -0.014, 0.025], LowerArm: [0, 0.021, 0], Hand: [0.003, -0.041, 0.002] },
  ],
  // point 0.01 cm off, palm 1.3°, fingers 1.1°
  "site|weak-hand|contra:out+down1|A|thumb|1h": [
    { UpperArm: [0.043, 0.338, -0.343], LowerArm: [0, 0.125, 0], Hand: [-0.432, 0.078, -0.268] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|contra:out+down1|S|pinky-side|1h": [
    { UpperArm: [-0.033, -0.014, 0.025], LowerArm: [0, 0.021, 0], Hand: [0.003, -0.041, 0.002] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|contra:out+down1|open_b|pinky-side|1h": [
    { UpperArm: [-0.033, -0.014, 0.025], LowerArm: [0, 0.021, 0], Hand: [0.003, -0.041, 0.002] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 1.9°
  "site|weak-hand|contra:out+down2|X|index|1h": [
    { UpperArm: [0.194, 0.366, -0.514], LowerArm: [0, 0.392, 0], Hand: [-0.55, 0.007, -0.314] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|weak-hand|contra:out+down2|open_b|pinky-side|1h": [
    { UpperArm: [-0.031, -0.015, 0.025], LowerArm: [0, 0.025, 0], Hand: [0.002, -0.04, 0.002] },
  ],
  // point 0.01 cm off, palm 2°, fingers 3.1°
  "site|weak-hand|contra:out+down3|1|index|1h": [
    { UpperArm: [0.3, 0.616, -0.518], LowerArm: [0, 0.48, 0], Hand: [-0.533, 0.039, -0.563] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|weak-hand|contra:out+down3|1|pinky-side|1h": [
    { UpperArm: [-0.028, -0.015, 0.023], LowerArm: [0, 0.029, 0], Hand: [0.001, -0.04, 0.001] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.2°
  "site|weak-hand|contra:out+down3|A|pinky-side|1h": [
    { UpperArm: [-0.035, -0.004, 0.015], LowerArm: [0, 0.028, 0], Hand: [0.003, -0.063, 0.006] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|weak-hand|contra:out+down3|C|pinky-side|1h": [
    { UpperArm: [-0.028, -0.015, 0.023], LowerArm: [0, 0.029, 0], Hand: [0.001, -0.04, 0.001] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|weak-hand|contra:out+down3|H|pinky-side|1h": [
    { UpperArm: [-0.028, -0.015, 0.023], LowerArm: [0, 0.029, 0], Hand: [0.001, -0.04, 0.001] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|weak-hand|contra:out+down3|open_b|pinky-side|1h": [
    { UpperArm: [-0.028, -0.015, 0.023], LowerArm: [0, 0.029, 0], Hand: [0.001, -0.04, 0.001] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 0.8°
  "site|weak-hand|contra:out+down5+ipsi3|A|thumb|1h": [
    { UpperArm: [0.107, 0.334, -0.323], LowerArm: [0, 0.085, 0], Hand: [-0.383, 0.155, -0.247] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|weak-hand|contra:out+down6|A|pinky-side|1h": [
    { UpperArm: [-0.019, -0.015, 0.021], LowerArm: [0, 0.042, 0], Hand: [-0.001, -0.038, 0.003] },
  ],
  // point 0 cm off, palm 1.2°, fingers 1.2°
  "site|weak-hand|contra:out+down8|8|fingertips|1h": [
    { UpperArm: [0.298, 0.448, -0.441], LowerArm: [0, 0.514, 0], Hand: [-0.447, -0.043, -0.351] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|weak-hand|contra:out+in4+down2|open_b|palm|1h": [
    { UpperArm: [0.02, -0.001, -0.051], LowerArm: [0, 0.042, 0], Hand: [-0.081, 0.008, -0.027] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 1.1°
  "site|weak-hand|contra:out|A|thumb|1h": [
    { UpperArm: [0.034, 0.336, -0.353], LowerArm: [0, 0.13, 0], Hand: [-0.446, 0.063, -0.276] },
  ],
  // point 0.02 cm off, palm 3.4°, fingers 4.5°
  "site|weak-hand|contra:out|G|index|1h": [
    { UpperArm: [0.248, 0.664, -0.6], LowerArm: [0, 0.493, 0], Hand: [-0.659, 0.015, -0.631] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|contra:out|K|pinky-side|1h": [
    { UpperArm: [-0.035, -0.013, 0.025], LowerArm: [0, 0.016, 0], Hand: [0.005, -0.042, 0.002] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.2°
  "site|weak-hand|contra:out|S|pinky-side|1h": [
    { UpperArm: [-0.042, -0.004, 0.016], LowerArm: [0, 0.016, 0], Hand: [0.007, -0.059, 0.006] },
  ],
  // point 0.02 cm off, palm 1.4°, fingers 2.4°
  "site|weak-hand|contra:out|open_b|fingertips|1h": [
    { UpperArm: [0.189, 0.707, -0.589], LowerArm: [0, 0.533, 0], Hand: [-0.741, -0.058, -0.752] },
  ],
  // point 0.01 cm off, palm 1.2°, fingers 2.2°
  "site|weak-hand|contra:up+down3|1|palm|1h": [
    { UpperArm: [-0.013, 0.171, -0.09], LowerArm: [0, -0.057, 0], Hand: [0.199, 0.187, -0.401] },
  ],
  // point 0.03 cm off, palm 3.3°, fingers 7.4°
  "site|weak-hand|contra:up|4|fingertips|1h": [
    { UpperArm: [-0.067, 0.483, 0.089], LowerArm: [0, -0.524, 0], Hand: [0.294, 0.191, -0.838] },
  ],
  // point 0.01 cm off, palm 0.8°, fingers 1.6°
  "site|weak-hand|contra:up|5|palm|1h": [
    { UpperArm: [0.004, 0.093, -0.077], LowerArm: [0, -0.031, 0], Hand: [0.155, 0.199, -0.277] },
  ],
  // point 0.01 cm off, palm 2.4°, fingers 3.8°
  "site|weak-hand|contra:up|C|fingertips|1h": [
    { UpperArm: [0.261, 0.081, -0.281], LowerArm: [0, -0.065, 0], Hand: [0.302, 0.273, -0.511] },
  ],
  // point 0.01 cm off, palm 0.8°, fingers 1.6°
  "site|weak-hand|contra:up|L|palm|1h": [
    { UpperArm: [0.004, 0.093, -0.077], LowerArm: [0, -0.031, 0], Hand: [0.155, 0.199, -0.277] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.5°
  "site|weak-hand|down:contra+down1|open_b|palm|1h": [
    { UpperArm: [-0.086, -0.043, 0.075], LowerArm: [0, 0, 0], Hand: [-0.003, 0.134, 0.058] },
  ],
  // point 0.02 cm off, palm 1.7°, fingers 1.8°
  "site|weak-hand|down:contra+down3|1|index|1h": [
    { UpperArm: [-0.275, -0.97, 0.489], LowerArm: [0, 0.091, 0], Hand: [0.238, 0.674, 0.625] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|weak-hand|down:contra+down3|open_b|palm|1h": [
    { UpperArm: [-0.07, -0.044, 0.058], LowerArm: [0, 0.039, 0], Hand: [-0.007, -0.001, 0.061] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.5°
  "site|weak-hand|down:contra+up6|open_b|palm|1h": [
    { UpperArm: [-0.07, -0.052, 0.063], LowerArm: [0, -0.017, 0], Hand: [-0.026, 0.121, 0.087] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 1.9°
  "site|weak-hand|down:contra|1|index|1h": [
    { UpperArm: [-0.1, -0.939, 0.366], LowerArm: [0, 0.208, 0], Hand: [0.158, 0.476, 0.662] },
  ],
  // point 0.01 cm off, palm 1.3°, fingers 1.1°
  "site|weak-hand|down:contra|bent_b|fingertips|1h": [
    { UpperArm: [-0.303, -0.285, 0.224], LowerArm: [0, 0.121, 0], Hand: [-0.116, 0.134, 0.396] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|weak-hand|down:contra|open_b|palm|1h": [
    { UpperArm: [-0.057, -0.041, 0.046], LowerArm: [0, 0.028, 0], Hand: [-0.01, -0.001, 0.059] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|weak-hand|down:out+contra+down2|H|pinky-side|1h": [
    { UpperArm: [-0.027, 0.039, 0.046], LowerArm: [0, 0.014, 0], Hand: [0.004, -0.04, 0.002] },
  ],
  // point 0.01 cm off, palm 1.9°, fingers 1.4°
  "site|weak-hand|down:out+contra+down3|1|index|1h": [
    { UpperArm: [0.198, -0.901, 0.349], LowerArm: [0, 0.552, 0], Hand: [0.583, 0.429, 0.481] },
  ],
  // point 0.01 cm off, palm 1.9°, fingers 1.4°
  "site|weak-hand|down:out+contra+down4|1|index|1h": [
    { UpperArm: [0.204, -0.906, 0.34], LowerArm: [0, 0.555, 0], Hand: [0.592, 0.427, 0.465] },
  ],
  // point 0.01 cm off, palm 2°, fingers 1.2°
  "site|weak-hand|down:out+contra|1|index|1h": [
    { UpperArm: [0.179, -0.886, 0.367], LowerArm: [0, 0.545, 0], Hand: [0.56, 0.423, 0.526] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down1|A|palm|1h": [
    { UpperArm: [-0.014, 0.025, -0.034], LowerArm: [0, 0.028, 0], Hand: [-0.015, -0.054, 0.04] },
  ],
  // point 0.01 cm off, palm 1.3°, fingers 1.2°
  "site|weak-hand|down:out+down1|open_8|fingertips|1h": [
    { UpperArm: [0.291, 0.102, -0.37], LowerArm: [0, 0.469, 0], Hand: [-0.064, -0.406, 0.094] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down1|open_b|palm|1h": [
    { UpperArm: [-0.014, 0.025, -0.034], LowerArm: [0, 0.028, 0], Hand: [-0.015, -0.054, 0.04] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 0.6°
  "site|weak-hand|down:out+down2|5|fingertips|1h": [
    { UpperArm: [0.436, 0.095, -0.363], LowerArm: [0, 0.541, 0], Hand: [0.002, -0.45, 0.023] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down2|A|palm|1h": [
    { UpperArm: [-0.013, 0.024, -0.032], LowerArm: [0, 0.031, 0], Hand: [-0.013, -0.054, 0.04] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down2|C|palm|1h": [
    { UpperArm: [-0.013, 0.024, -0.032], LowerArm: [0, 0.031, 0], Hand: [-0.013, -0.054, 0.04] },
  ],
  // point 0.04 cm off, palm 3.5°, fingers 0.7°
  "site|weak-hand|down:out+down2|C|thumb|1h": [
    { UpperArm: [0.049, -0.146, -0.128], LowerArm: [0, 0.355, 0], Hand: [0.336, -0.111, 0.471] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 0.9°
  "site|weak-hand|down:out+down2|H|fingertips|1h": [
    { UpperArm: [0.284, 0.088, -0.276], LowerArm: [0, 0.398, 0], Hand: [-0.009, -0.343, 0.064] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|down:out+down2|K|palm|1h": [
    { UpperArm: [-0.01, 0.017, -0.033], LowerArm: [0, 0.035, 0], Hand: [-0.016, -0.027, 0.037] },
  ],
  // point 0.02 cm off, palm 4.1°, fingers 1.9°
  "site|weak-hand|down:out+down2|L|thumb|1h": [
    { UpperArm: [0.051, -0.623, 0.034], LowerArm: [0, 0.413, 0], Hand: [0.631, 0.344, 0.619] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|down:out+down2|flat_b|palm|1h": [
    { UpperArm: [-0.01, 0.017, -0.033], LowerArm: [0, 0.035, 0], Hand: [-0.016, -0.027, 0.037] },
  ],
  // point 0.01 cm off, palm 3°, fingers 1.3°
  "site|weak-hand|down:out+down2|flat_o|fingertips|1h": [
    { UpperArm: [-0.051, 0.003, -0.176], LowerArm: [0, 0.283, 0], Hand: [0.04, -0.156, 0.318] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 1.2°
  "site|weak-hand|down:out+down2|open_8|fingertips|1h": [
    { UpperArm: [0.302, 0.103, -0.365], LowerArm: [0, 0.475, 0], Hand: [-0.054, -0.402, 0.095] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|down:out+down2|open_b|palm|1h": [
    { UpperArm: [-0.01, 0.017, -0.033], LowerArm: [0, 0.035, 0], Hand: [-0.016, -0.027, 0.037] },
  ],
  // point 0.03 cm off, palm 2.9°, fingers 4.2°
  "site|weak-hand|down:out+down3|1|index|1h": [
    { UpperArm: [0.431, 0.056, -0.311], LowerArm: [0, 0.544, 0], Hand: [0.034, -0.473, 0.01] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down3|5|palm|1h": [
    { UpperArm: [-0.012, 0.022, -0.031], LowerArm: [0, 0.034, 0], Hand: [-0.012, -0.054, 0.039] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down3|A|palm|1h": [
    { UpperArm: [-0.012, 0.022, -0.031], LowerArm: [0, 0.034, 0], Hand: [-0.012, -0.054, 0.039] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down3|C|palm|1h": [
    { UpperArm: [-0.012, 0.022, -0.031], LowerArm: [0, 0.034, 0], Hand: [-0.012, -0.054, 0.039] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 0.9°
  "site|weak-hand|down:out+down3|H|fingertips|1h": [
    { UpperArm: [0.289, 0.085, -0.268], LowerArm: [0, 0.402, 0], Hand: [0, -0.336, 0.065] },
  ],
  // point 0 cm off, palm 1°, fingers 0.8°
  "site|weak-hand|down:out+down3|R|fingertips|1h": [
    { UpperArm: [0.304, 0.066, -0.262], LowerArm: [0, 0.394, 0], Hand: [0.013, -0.314, 0.054] },
  ],
  // point 0 cm off, palm 0°, fingers 0.1°
  "site|weak-hand|down:out+down3|S|pinky-side|1h": [
    { UpperArm: [-0.129, 0.029, 0.139], LowerArm: [0, -0.101, 0], Hand: [0.007, -0.02, -0.017] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down3|U|palm|1h": [
    { UpperArm: [-0.012, 0.022, -0.031], LowerArm: [0, 0.034, 0], Hand: [-0.012, -0.054, 0.039] },
  ],
  // point 0.07 cm off, palm 1.5°, fingers 6.3°
  "site|weak-hand|down:out+down3|baby_o|index|1h": [
    { UpperArm: [0.188, 0.123, -0.422], LowerArm: [0, 0.458, 0], Hand: [-0.137, -0.505, 0.163] },
  ],
  // point 0.01 cm off, palm 2.1°, fingers 1°
  "site|weak-hand|down:out+down3|bent_b|fingertips|1h": [
    { UpperArm: [-0.036, 0.056, -0.217], LowerArm: [0, 0.269, 0], Hand: [-0.028, -0.2, 0.277] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 1.2°
  "site|weak-hand|down:out+down3|open_b|fingertips|1h": [
    { UpperArm: [0.432, 0.118, -0.35], LowerArm: [0, 0.53, 0], Hand: [0.006, -0.456, 0.025] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|down:out+down3|open_b|palm|1h": [
    { UpperArm: [-0.012, 0.022, -0.031], LowerArm: [0, 0.034, 0], Hand: [-0.012, -0.054, 0.039] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 0.8°
  "site|weak-hand|down:out|P|fingertips|1h": [
    { UpperArm: [0.209, 0.08, -0.333], LowerArm: [0, 0.393, 0], Hand: [-0.07, -0.339, 0.119] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|down:out|S|palm|1h": [
    { UpperArm: [-0.014, 0.015, -0.031], LowerArm: [0, 0.029, 0], Hand: [-0.017, -0.024, 0.035] },
  ],
  // point 0.08 cm off, palm 5.4°, fingers 8.9°
  "site|weak-hand|down:out|X|index|1h": [
    { UpperArm: [0.125, 0.03, -0.264], LowerArm: [0, 0.42, 0], Hand: [-0.12, -0.468, 0.053] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|down:out|open_b|palm|1h": [
    { UpperArm: [-0.014, 0.015, -0.031], LowerArm: [0, 0.029, 0], Hand: [-0.017, -0.024, 0.035] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|in:contra+down1|open_b|pinky-side|1h": [
    { UpperArm: [-0.034, -0.012, 0.021], LowerArm: [0, 0.027, 0], Hand: [-0.019, -0.046, 0.018] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0°
  "site|weak-hand|in:contra+down3|H|pinky-side|1h": [
    { UpperArm: [-0.027, -0.014, 0.019], LowerArm: [0, 0.036, 0], Hand: [-0.02, -0.044, 0.021] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.6°
  "site|weak-hand|in:contra+down4|1|index|1h": [
    { UpperArm: [0.072, -0.142, -0.26], LowerArm: [0, 0.059, 0], Hand: [-0.129, 0.064, 0.253] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.2°
  "site|weak-hand|in:contra+down6|A|palm|1h": [
    { UpperArm: [-0.067, -0.015, 0.02], LowerArm: [0, -0.118, 0], Hand: [-0.018, 0.071, 0.053] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0°
  "site|weak-hand|in:contra+down7|open_b|pinky-side|1h": [
    { UpperArm: [-0.014, -0.019, 0.016], LowerArm: [0, 0.054, 0], Hand: [-0.023, -0.041, 0.028] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.5°
  "site|weak-hand|in:contra|1|index|1h": [
    { UpperArm: [0.073, -0.143, -0.275], LowerArm: [0, 0.068, 0], Hand: [-0.129, 0.054, 0.245] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.4°
  "site|weak-hand|in:contra|4|fingertips|1h": [
    { UpperArm: [0.055, -0.151, -0.282], LowerArm: [0, 0.105, 0], Hand: [-0.142, 0.006, 0.244] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|in:contra|C|palm|1h": [
    { UpperArm: [-0.057, -0.005, 0.011], LowerArm: [0, -0.101, 0], Hand: [-0.016, 0.054, 0.044] },
  ],
  // point 0 cm off, palm 0.7°, fingers 0.8°
  "site|weak-hand|in:contra|X|index|1h": [
    { UpperArm: [-0.167, -0.04, -0.101], LowerArm: [0, -0.372, 0], Hand: [-0.052, 0.213, 0.206] },
  ],
  // point 0.14 cm off, palm 11°, fingers 10.2°
  "site|weak-hand|in:down+down2|bent_b|fingertips|1h": [
    { UpperArm: [-0.403, -0.733, 0.51], LowerArm: [0, -0.583, 0], Hand: [0.947, 0.358, 0.27] },
  ],
  // point 0.02 cm off, palm 1.5°, fingers 6.6°
  "site|weak-hand|in:down+down4|V|fingertips|1h": [
    { UpperArm: [-0.249, -0.332, 0.208], LowerArm: [0, 0.071, 0], Hand: [0.665, 0.111, 0.639] },
  ],
  // point 0.16 cm off, palm 14.2°, fingers 11.1°
  "site|weak-hand|in:down+down9|flat_o|fingertips|1h": [
    { UpperArm: [-0.576, -0.73, 0.61], LowerArm: [0, -0.559, 0], Hand: [0.715, 0.248, 0.062] },
  ],
  // point 0.35 cm off, palm 29.2°, fingers 22.4°
  "site|weak-hand|in:up+down3|flat_o|fingertips|1h": [
    { UpperArm: [-0.516, -0.199, -0.218], LowerArm: [0, -0.838, 0], Hand: [0.025, 0.586, 0.328] },
  ],
  // point 0.01 cm off, palm 0.5°, fingers 0.8°
  "site|weak-hand|in:up+down3|open_b|palm|1h": [
    { UpperArm: [-0.064, -0.166, 0.064], LowerArm: [0, -0.231, 0], Hand: [-0.071, 0.005, 0.33] },
  ],
  // point 0.17 cm off, palm 14.1°, fingers 21°
  "site|weak-hand|in:up+down4|1|index|1h": [
    { UpperArm: [-0.173, -0.218, -0.12], LowerArm: [0, -0.791, 0], Hand: [0.002, 0.188, 0.531] },
  ],
  // point 0.25 cm off, palm 17.3°, fingers 25.9°
  "site|weak-hand|in:up+out3+down4|V|fingertips|1h": [
    { UpperArm: [-0.158, -0.112, -0.156], LowerArm: [0, -0.513, 0], Hand: [0.009, 0.199, 0.278] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.3°
  "site|weak-hand|ipsi:out|A|thumb|1h": [
    { UpperArm: [-0.174, -0.043, 0.171], LowerArm: [0, 0.138, 0], Hand: [0.017, 0.14, 0.133] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.7°
  "site|weak-hand|out:up+down1|B|pinky-side|1h": [
    { UpperArm: [-0.082, -0.141, 0.158], LowerArm: [0, -0.147, 0], Hand: [-0.001, 0.058, -0.239] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.5°
  "site|weak-hand|out:up+down1|U|palm|1h": [
    { UpperArm: [0.036, -0.119, 0.064], LowerArm: [0, 0.031, 0], Hand: [-0.004, 0.047, -0.176] },
  ],
  // point 0 cm off, palm 0.6°, fingers 1.3°
  "site|weak-hand|up:contra+down3|open_b|fingertips|1h": [
    { UpperArm: [-0.247, 0.01, -0.483], LowerArm: [0, 0.143, 0], Hand: [-0.257, -0.246, 0.137] },
  ],
  // point 0.05 cm off, palm 0.4°, fingers 2.4°
  "site|weak-hand|up:out+contra+down3|open_b|back|1h": [
    { UpperArm: [-0.064, 0.015, -0.043], LowerArm: [0, 0.029, 0], Hand: [-0.094, -0.072, -0.077] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|up:out+down2|K|back|1h": [
    { UpperArm: [-0.014, 0.008, 0.009], LowerArm: [0, 0.032, 0], Hand: [0.014, -0.007, -0.047] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|up:out+down2|open_b|back|1h": [
    { UpperArm: [-0.014, 0.008, 0.009], LowerArm: [0, 0.032, 0], Hand: [0.014, -0.007, -0.047] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.1°
  "site|weak-hand|up:out+down3|flat_o|back|1h": [
    { UpperArm: [-0.006, -0.001, 0.014], LowerArm: [0, 0.04, 0], Hand: [-0.101, 0.02, -0.004] },
  ],
  // point 0 cm off, palm 0.3°, fingers 0.1°
  "site|weak-hand|up:out+down3|open_b|back|1h": [
    { UpperArm: [-0.006, -0.001, 0.014], LowerArm: [0, 0.04, 0], Hand: [-0.101, 0.02, -0.004] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0°
  "site|weak-hand|up:out+down9|bent_b|back|1h": [
    { UpperArm: [0.057, 0.038, 0.081], LowerArm: [0, 0.049, 0], Hand: [0.019, 0.005, 0.011] },
  ],
  // point 0.01 cm off, palm 1°, fingers 2.8°
  "turn|base-hand|contra:out|1h": [
    { UpperArm: [-0.263, 0.882, -0.848], LowerArm: [0, 0.022, 0], Hand: [0.617, 0.675, -0.304] },
  ],
  // point 0.13 cm off, palm 30.1°, fingers 26.3°
  "turn|base-hand|contra:up|1h": [
    { UpperArm: [0.062, -0.131, 0.133], LowerArm: [0, -0.267, 0], Hand: [0.61, 1.516, 1.328] },
  ],
  // point 0.11 cm off, palm 23.2°, fingers 28.6°
  "turn|base-hand|down:contra|1h": [
    { UpperArm: [-0.35, 0.823, -0.906], LowerArm: [0, -0.086, 0], Hand: [1.61, 1.481, 0.693] },
  ],
  // point 0.05 cm off, palm 19.3°, fingers 7.4°
  "turn|base-hand|down:out+contra|1h": [
    { UpperArm: [-0.29, 0.848, -0.903], LowerArm: [0, -0.02, 0], Hand: [1.807, 1.121, 0.346] },
  ],
  // point 0.06 cm off, palm 19.7°, fingers 5.4°
  "turn|base-hand|down:out|1h": [
    { UpperArm: [-0.253, 0.984, -0.911], LowerArm: [0, 0.007, 0], Hand: [1.801, 0.308, -0.028] },
  ],
  // point 0.04 cm off, palm 6.2°, fingers 5.8°
  "turn|base-hand|in:contra|1h": [
    { UpperArm: [-0.411, 0.842, -0.909], LowerArm: [0, -0.211, 0], Hand: [0.637, 0.735, 1.315] },
  ],
  // point 0.08 cm off, palm 12°, fingers 12°
  "turn|base-hand|in:up|1h": [
    { UpperArm: [-0.373, 0.414, -0.516], LowerArm: [0, -0.356, 0], Hand: [-0.304, 0.84, 1.49] },
  ],
  // point 0.09 cm off, palm 27.3°, fingers 3.1°
  "turn|base-hand|out:up|1h": [
    { UpperArm: [-0.382, 1.214, -0.952], LowerArm: [0, -0.446, 0], Hand: [-1.342, -1.402, 1.294] },
  ],
  // point 0.01 cm off, palm 4°, fingers 1.5°
  "turn|base-hand|up:contra|1h": [
    { UpperArm: [-0.41, 0.173, -0.456], LowerArm: [0, -0.229, 0], Hand: [-0.001, -0.909, 0.288] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1.4°
  "turn|base-hand|up:out|1h": [
    { UpperArm: [0.191, -0.035, 0.256], LowerArm: [0, 0.016, 0], Hand: [0.198, 0.385, 0.105] },
  ],
  // point 0.01 cm off, palm 0.7°, fingers 0.6°
  "turn|belly|in:contra|1h": [
    { UpperArm: [-0.059, -0.012, -0.004], LowerArm: [0, -0.024, 0], Hand: [0.113, -0.137, 0.398] },
  ],
  // point 0.01 cm off, palm 0.7°, fingers 3.9°
  "turn|belly|in:contra|2h": [
    { UpperArm: [0.011, 0.03, -0.132], LowerArm: [0, 0.208, 0], Hand: [1.101, -0.157, -0.429] },
  ],
  // point 0.01 cm off, palm 1.3°, fingers 5.1°
  "turn|belly|in:down+ipsi12|1h": [
    { UpperArm: [-0.062, -0.486, -0.026], LowerArm: [0, 0.195, 0], Hand: [1.601, -0.459, 0.71] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 1.7°
  "turn|cheek|contra:in+up+up2+ipsi2|1h": [
    { UpperArm: [-0.414, -0.268, 0.155], LowerArm: [0, -0.368, 0], Hand: [0.386, 0.59, 0.153] },
  ],
  // point 0.23 cm off, palm 22.2°, fingers 57.2°
  "turn|cheek|contra:out|1h": [
    { UpperArm: [-0.579, 0.795, 0.256], LowerArm: [0, 0.191, 0], Hand: [0.635, -1.256, -1.251] },
  ],
  // point 0.04 cm off, palm 1.7°, fingers 5.3°
  "turn|cheek|contra:up+ipsi4+out2|1h": [
    { UpperArm: [-0.017, -0.337, -0.094], LowerArm: [0, 0.022, 0], Hand: [0.351, 0.005, -0.136] },
  ],
  // point 0.05 cm off, palm 1.8°, fingers 9.4°
  "turn|cheek|contra:up+ipsi4|1h": [
    { UpperArm: [-0.013, -0.347, -0.069], LowerArm: [0, 0.067, 0], Hand: [0.339, 0.031, -0.113] },
  ],
  // point 0.03 cm off, palm 2.7°, fingers 6.7°
  "turn|cheek|contra:up|1h": [
    { UpperArm: [0.012, 0.01, -0.071], LowerArm: [0, 0.051, 0], Hand: [0.67, -0.034, -0.318] },
  ],
  // point 0.16 cm off, palm 17.3°, fingers 21.3°
  "turn|cheek|down:contra|1h": [
    { UpperArm: [-0.943, -0.515, -0.432], LowerArm: [0, -0.256, 0], Hand: [-0.177, -0.643, 1.118] },
  ],
  // point 0.09 cm off, palm 12.4°, fingers 34°
  "turn|cheek|in:contra|1h": [
    { UpperArm: [-0.635, -0.563, -0.458], LowerArm: [0, -0.039, 0], Hand: [-1.604, -1.263, -0.156] },
  ],
  // point 0.04 cm off, palm 4.1°, fingers 7.7°
  "turn|cheek|in:up+ipsi4+up3|1h": [
    { UpperArm: [-0.173, -0.053, 0.188], LowerArm: [0, 0.064, 0], Hand: [-0.782, -0.29, -0.16] },
  ],
  // point 0.02 cm off, palm 2.9°, fingers 3.4°
  "turn|cheek|in:up+ipsi6+out4|1h": [
    { UpperArm: [-0.008, -0.262, -0.066], LowerArm: [0, -0.017, 0], Hand: [-1.066, -0.223, 0.059] },
  ],
  // point 0.01 cm off, palm 2.1°, fingers 1.5°
  "turn|cheek|in:up+out6|1h": [
    { UpperArm: [-0.021, 0.034, 0.09], LowerArm: [0, -0.184, 0], Hand: [-0.741, -0.158, 0.136] },
  ],
  // point 0.02 cm off, palm 2.1°, fingers 4.3°
  "turn|cheek|in:up|1h": [
    { UpperArm: [0.007, 0.28, -0.016], LowerArm: [0, 0.033, 0], Hand: [-0.599, 0.025, -0.091] },
  ],
  // point 0.06 cm off, palm 13.6°, fingers 10.6°
  "turn|cheek|out:up+out6|1h": [
    { UpperArm: [-0.091, -0.1, -0.389], LowerArm: [0, -0.022, 0], Hand: [1.74, -0.411, -0.384] },
  ],
  // point 0.01 cm off, palm 2.4°, fingers 3.1°
  "turn|chest-front|contra:out+ipsi4|2h": [
    { UpperArm: [0.054, -0.187, -0.001], LowerArm: [0, 0.269, 0], Hand: [0.979, -0.718, -1.089] },
  ],
  // point 0.03 cm off, palm 4.4°, fingers 5.5°
  "turn|chest-front|contra:out|1h": [
    { UpperArm: [0.059, 0.05, 0.138], LowerArm: [0, 0.169, 0], Hand: [0.59, -0.569, -1.261] },
  ],
  // point 0.03 cm off, palm 3.9°, fingers 4.9°
  "turn|chest-front|contra:out|2h": [
    { UpperArm: [0.067, 0.031, 0.008], LowerArm: [0, 0.258, 0], Hand: [1.016, -0.705, -1.25] },
  ],
  // point 0.05 cm off, palm 10.4°, fingers 8.8°
  "turn|chest-front|contra:up|1h": [
    { UpperArm: [0.007, 0.04, 0.134], LowerArm: [0, -0.086, 0], Hand: [1.18, 0.904, -1.222] },
  ],
  // point 0.11 cm off, palm 7.8°, fingers 28.1°
  "turn|chest-front|down:out+ipsi4|2h": [
    { UpperArm: [0.857, -0.628, 1.794], LowerArm: [0, 0.241, 0], Hand: [1.623, 1.276, 1.102] },
  ],
  // point 0.09 cm off, palm 8.4°, fingers 23.8°
  "turn|chest-front|down:out+ipsi6|2h": [
    { UpperArm: [0.914, -0.7, 1.888], LowerArm: [0, 0.232, 0], Hand: [1.618, 1.258, 1.12] },
  ],
  // point 0.05 cm off, palm 28°, fingers 5.9°
  "turn|chest-front|down:out+out12|2h": [
    { UpperArm: [-0.407, 0.291, -0.175], LowerArm: [0, -0.381, 0], Hand: [1.966, -0.617, -0.824] },
  ],
  // point 0.04 cm off, palm 18.5°, fingers 7.3°
  "turn|chest-front|down:out+out6|1h": [
    { UpperArm: [-0.181, 0.187, -0.037], LowerArm: [0, -0.113, 0], Hand: [1.787, -0.734, -0.453] },
  ],
  // point 0.04 cm off, palm 22.6°, fingers 11.2°
  "turn|chest-front|down:out|1h": [
    { UpperArm: [0.046, 0.126, -0.01], LowerArm: [0, 0.175, 0], Hand: [1.847, -0.719, -0.408] },
  ],
  // point 0.05 cm off, palm 29.4°, fingers 17.1°
  "turn|chest-front|down:out|2h": [
    { UpperArm: [0.045, 0.065, -0.129], LowerArm: [0, 0.255, 0], Hand: [2.033, -0.508, -0.612] },
  ],
  // point 0.01 cm off, palm 0.6°, fingers 2.7°
  "turn|chest-front|in:contra+in2|1h": [
    { UpperArm: [0, -0.066, 0.003], LowerArm: [0, 0.136, 0], Hand: [0.413, -0.583, 0.28] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 4.1°
  "turn|chest-front|in:contra+in2|2h": [
    { UpperArm: [-0.04, -0.067, -0.14], LowerArm: [0, 0.174, 0], Hand: [0.855, -0.7, 0.291] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 4°
  "turn|chest-front|in:contra|2h": [
    { UpperArm: [-0.12, -0.036, -0.147], LowerArm: [0, 0.076, 0], Hand: [0.859, -0.688, 0.294] },
  ],
  // point 0.07 cm off, palm 1.5°, fingers 1.5°
  "turn|chest-front|in:up+contra+in5|1h": [
    { UpperArm: [0.185, -0.017, 0.02], LowerArm: [0, 0.175, 0], Hand: [-0.1, -0.011, 0.167] },
  ],
  // point 0.01 cm off, palm 0.6°, fingers 3.1°
  "turn|chest-front|in:up|1h": [
    { UpperArm: [-0.014, 0.049, 0.131], LowerArm: [0, -0.113, 0], Hand: [-0.68, 0.411, 0.371] },
  ],
  // point 0.03 cm off, palm 4.9°, fingers 5.2°
  "turn|chest-front|up:out|1h": [
    { UpperArm: [0.06, 0.06, 0.138], LowerArm: [0, 0.163, 0], Hand: [-0.716, 0.45, -1.272] },
  ],
  // point 0.06 cm off, palm 9.8°, fingers 9.1°
  "turn|chest-front|up:out|2h": [
    { UpperArm: [0.064, 0.127, -0.124], LowerArm: [0, 0.243, 0], Hand: [-0.557, 0.241, -1.384] },
  ],
  // point 0.05 cm off, palm 3.8°, fingers 3.5°
  "turn|chest|contra:in|1h": [
    { UpperArm: [-0.103, -0.415, 1.467], LowerArm: [0, -0.502, 0], Hand: [-1.055, -0.093, 1.39] },
  ],
  // point 0.15 cm off, palm 30.4°, fingers 12.4°
  "turn|chest|contra:up|1h": [
    { UpperArm: [-0.169, 0.315, 0.115], LowerArm: [0, -0.356, 0], Hand: [-0.899, 1.282, 0.634] },
  ],
  // point 0.01 cm off, palm 2.4°, fingers 1.5°
  "turn|chest|down:in+contra+contra9|1h": [
    { UpperArm: [-0.706, 0.573, -0.019], LowerArm: [0, -0.269, 0], Hand: [0.222, 0.889, 0.45] },
  ],
  // point 0.02 cm off, palm 3.2°, fingers 2°
  "turn|chest|down:in+contra|1h": [
    { UpperArm: [-0.699, 0.129, -0.034], LowerArm: [0, -0.206, 0], Hand: [-0.225, 0.618, 0.969] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 2.9°
  "turn|chest|in:contra+contra10|2h": [
    { UpperArm: [-0.238, 0.328, -0.025], LowerArm: [0, 0.185, 0], Hand: [0.51, -0.613, -0.2] },
  ],
  // point 0.01 cm off, palm 2°, fingers 3.3°
  "turn|chest|in:contra+contra12+up6+out3|1h": [
    { UpperArm: [-0.579, 0.488, -0.067], LowerArm: [0, 0.141, 0], Hand: [0.248, -0.829, -0.458] },
  ],
  // point 0.01 cm off, palm 2.1°, fingers 3.7°
  "turn|chest|in:contra+contra12+up6|1h": [
    { UpperArm: [-0.476, 0.479, -0.058], LowerArm: [0, 0.283, 0], Hand: [0.258, -0.866, -0.501] },
  ],
  // point 0 cm off, palm 1°, fingers 2.9°
  "turn|chest|in:contra+contra9+out3|1h": [
    { UpperArm: [-0.36, 0.296, -0.038], LowerArm: [0, 0.062, 0], Hand: [0.486, -0.605, -0.144] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 2.9°
  "turn|chest|in:contra+contra9|1h": [
    { UpperArm: [-0.246, 0.27, -0.025], LowerArm: [0, 0.187, 0], Hand: [0.518, -0.618, -0.125] },
  ],
  // point 0.01 cm off, palm 2.3°, fingers 3.8°
  "turn|chest|in:contra+ipsi4|2h": [
    { UpperArm: [-0.425, -0.399, -0.129], LowerArm: [0, 0.093, 0], Hand: [0.485, -0.597, 0.524] },
  ],
  // point 0.01 cm off, palm 2.2°, fingers 4.4°
  "turn|chest|in:contra+up4|2h": [
    { UpperArm: [-0.451, -0.251, -0.094], LowerArm: [0, 0.262, 0], Hand: [0.426, -0.806, 0.306] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 3.4°
  "turn|chest|in:contra|1h": [
    { UpperArm: [-0.305, -0.224, -0.069], LowerArm: [0, 0.17, 0], Hand: [0.48, -0.598, 0.322] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 3.4°
  "turn|chest|in:contra|2h": [
    { UpperArm: [-0.305, -0.224, -0.069], LowerArm: [0, 0.17, 0], Hand: [0.48, -0.598, 0.322] },
  ],
  // point 0.02 cm off, palm 1.5°, fingers 4.9°
  "turn|chest|in:up+contra13+up5|1h": [
    { UpperArm: [-0.584, 1.188, 0.204], LowerArm: [0, -0.547, 0], Hand: [-0.683, 0.956, -0.032] },
  ],
  // point 0.02 cm off, palm 1.9°, fingers 7.6°
  "turn|chest|in:up+contra6|1h": [
    { UpperArm: [-0.223, 0.815, 0.072], LowerArm: [0, -0.474, 0], Hand: [-0.719, 0.642, 0.264] },
  ],
  // point 0.04 cm off, palm 3.7°, fingers 4°
  "turn|chest|in:up|1h": [
    { UpperArm: [-0.177, 0.519, 0.107], LowerArm: [0, -0.407, 0], Hand: [-0.765, 0.378, 0.437] },
  ],
  // point 0.04 cm off, palm 3.7°, fingers 4°
  "turn|chest|in:up|2h": [
    { UpperArm: [-0.177, 0.519, 0.107], LowerArm: [0, -0.407, 0], Hand: [-0.765, 0.378, 0.437] },
  ],
  // point 0.04 cm off, palm 3.7°, fingers 3.5°
  "turn|chest|ipsi:up+contra9|1h": [
    { UpperArm: [-0.263, 1.213, -0.051], LowerArm: [0, -0.538, 0], Hand: [-0.94, -0.519, 0.408] },
  ],
  // point 0.24 cm off, palm 21.4°, fingers 23.5°
  "turn|chest|up:in|2h": [
    { UpperArm: [-0.585, 1.392, -0.573], LowerArm: [0, -0.617, 0], Hand: [0.842, -0.683, 1.523] },
  ],
  // point 0.03 cm off, palm 6.1°, fingers 2.7°
  "turn|chin|contra:in+up|1h": [
    { UpperArm: [-0.147, -0.179, 0.749], LowerArm: [0, -0.412, 0], Hand: [0.578, 1.049, 0.349] },
  ],
  // point 0.04 cm off, palm 5.4°, fingers 4.1°
  "turn|chin|contra:up|1h": [
    { UpperArm: [0.127, 0.34, 0.034], LowerArm: [0, -0.018, 0], Hand: [1.409, 0.077, -1.068] },
  ],
  // point 0.01 cm off, palm 2.3°, fingers 3.6°
  "turn|chin|down:contra+down3|1h": [
    { UpperArm: [-0.814, -0.545, -0.075], LowerArm: [0, 0.044, 0], Hand: [0.395, -0.489, 0.975] },
  ],
  // point 0.01 cm off, palm 1.9°, fingers 4.1°
  "turn|chin|down:contra+down4|1h": [
    { UpperArm: [-0.747, -0.563, -0.08], LowerArm: [0, 0.06, 0], Hand: [0.379, -0.433, 0.98] },
  ],
  // point 0.01 cm off, palm 2.3°, fingers 4.3°
  "turn|chin|down:contra|1h": [
    { UpperArm: [-0.987, -0.46, -0.05], LowerArm: [0, -0.052, 0], Hand: [0.424, -0.594, 0.965] },
  ],
  // point 0.08 cm off, palm 11.9°, fingers 25.1°
  "turn|chin|in:contra|1h": [
    { UpperArm: [-0.452, -0.476, -0.056], LowerArm: [0, 0.09, 0], Hand: [-0.715, -1.209, -0.065] },
  ],
  // point 0.01 cm off, palm 1.3°, fingers 1.5°
  "turn|chin|in:up+contra2|1h": [
    { UpperArm: [0.012, 0.616, 0.133], LowerArm: [0, -0.153, 0], Hand: [-0.026, 0.457, -0.3] },
  ],
  // point 0.06 cm off, palm 6.6°, fingers 7.4°
  "turn|chin|in:up+contra|1h": [
    { UpperArm: [-0.015, -0.201, -0.002], LowerArm: [0, 0.117, 0], Hand: [-0.506, -0.578, -0.035] },
  ],
  // point 0.02 cm off, palm 1.5°, fingers 1.6°
  "turn|chin|in:up+down3|1h": [
    { UpperArm: [0.235, 0.567, -0.077], LowerArm: [0, -0.141, 0], Hand: [-0.151, 0.607, -0.111] },
  ],
  // point 0.01 cm off, palm 1.2°, fingers 1.3°
  "turn|chin|in:up+ipsi2|1h": [
    { UpperArm: [0.13, 0.411, 0.015], LowerArm: [0, -0.02, 0], Hand: [-0.219, 0.414, -0.19] },
  ],
  // point 0.01 cm off, palm 0.3°, fingers 2.1°
  "turn|chin|in:up+out4|1h": [
    { UpperArm: [-0.003, 0.384, 0.106], LowerArm: [0, -0.208, 0], Hand: [-0.293, 0.37, -0.106] },
  ],
  // point 0.01 cm off, palm 0.8°, fingers 1.9°
  "turn|chin|in:up|1h": [
    { UpperArm: [0.101, 0.487, 0.098], LowerArm: [0, -0.072, 0], Hand: [-0.12, 0.381, -0.218] },
  ],
  // point 0.11 cm off, palm 7.7°, fingers 18.4°
  "turn|ear|contra:up|1h": [
    { UpperArm: [-0.291, -0.182, -0.496], LowerArm: [0, 0.022, 0], Hand: [0.289, 0.187, 0.019] },
  ],
  // point 0.03 cm off, palm 4.3°, fingers 3°
  "turn|eye|contra:up+ipsi6|2h": [
    { UpperArm: [0.446, 0.027, 0.127], LowerArm: [0, 0.366, 0], Hand: [1.035, 0.939, -0.458] },
  ],
  // point 0.03 cm off, palm 4.4°, fingers 9.4°
  "turn|eye|contra:up+out8+ipsi4|1h": [
    { UpperArm: [0.425, 0.208, 0.039], LowerArm: [0, 0.093, 0], Hand: [1.145, 1.047, -0.628] },
  ],
  // point 0.31 cm off, palm 31.2°, fingers 33.3°
  "turn|eye|down:contra+ipsi4|1h": [
    { UpperArm: [-0.213, -0.077, -0.343], LowerArm: [0, -0.053, 0], Hand: [0.452, 0.673, 0.418] },
  ],
  // point 0.42 cm off, palm 43.1°, fingers 61.8°
  "turn|eye|down:out+out4|2h": [
    { UpperArm: [-0.128, 0.11, -0.311], LowerArm: [0, 0.347, 0], Hand: [1.392, 0.32, 0.285] },
  ],
  // point 0.03 cm off, palm 2°, fingers 5.1°
  "turn|eye|in:up+down2|1h": [
    { UpperArm: [0.648, 0.538, 0.28], LowerArm: [0, 0.282, 0], Hand: [0.049, 0.964, -0.516] },
  ],
  // point 0.02 cm off, palm 1.5°, fingers 4.4°
  "turn|eye|in:up+out3|1h": [
    { UpperArm: [0.601, 0.368, 0.559], LowerArm: [0, 0.135, 0], Hand: [0.152, 0.72, -0.382] },
  ],
  // point 0.14 cm off, palm 24.7°, fingers 43.2°
  "turn|eye|out:contra+ipsi2|2h": [
    { UpperArm: [-0.223, -0.114, -0.352], LowerArm: [0, 0.275, 0], Hand: [1.429, 1.431, 0.222] },
  ],
  // point 0.05 cm off, palm 6.3°, fingers 7.4°
  "turn|forearm|contra:out+down3|1h": [
    { UpperArm: [0.076, 0.017, 0.16], LowerArm: [0, -0.141, 0], Hand: [-1.308, -0.041, -1.263] },
  ],
  // point 0.01 cm off, palm 0.3°, fingers 2.5°
  "turn|forearm|down:contra+down3|1h": [
    { UpperArm: [0.001, -0.077, 0.015], LowerArm: [0, -0.163, 0], Hand: [-0.194, 0.785, -0.065] },
  ],
  // point 0.15 cm off, palm 6.3°, fingers 36.3°
  "turn|forehead|contra:out+out8+ipsi7+up2|2h": [
    { UpperArm: [-0.4, -0.046, -0.021], LowerArm: [0, 0.146, 0], Hand: [0.906, -0.996, -0.634] },
  ],
  // point 0.18 cm off, palm 4.2°, fingers 41.1°
  "turn|forehead|contra:out|1h": [
    { UpperArm: [-0.54, 0.438, 0.631], LowerArm: [0, 0.274, 0], Hand: [1.364, -1.078, -1.056] },
  ],
  // point 0.02 cm off, palm 2.4°, fingers 5.7°
  "turn|forehead|contra:up+out+ipsi4+out4|1h": [
    { UpperArm: [-0.222, 0.226, 0.038], LowerArm: [0, 0.365, 0], Hand: [0.88, -0.747, -0.927] },
  ],
  // point 0.02 cm off, palm 2.8°, fingers 5.3°
  "turn|forehead|contra:up+out+out4|1h": [
    { UpperArm: [-0.243, 0.455, 0.187], LowerArm: [0, 0.284, 0], Hand: [1.006, -0.69, -1.07] },
  ],
  // point 0.01 cm off, palm 3°, fingers 3.7°
  "turn|forehead|contra:up+up4+out2|1h": [
    { UpperArm: [-0.136, 0.54, -0.256], LowerArm: [0, 0.046, 0], Hand: [1.164, 0.293, -0.895] },
  ],
  // point 0.02 cm off, palm 3.4°, fingers 3.8°
  "turn|forehead|contra:up|1h": [
    { UpperArm: [0.054, 0.582, -0.281], LowerArm: [0, 0.233, 0], Hand: [1.257, 0.253, -0.912] },
  ],
  // point 0.16 cm off, palm 17°, fingers 19.8°
  "turn|forehead|down:contra|1h": [
    { UpperArm: [-0.445, 0.011, -0.345], LowerArm: [0, -0.213, 0], Hand: [0.802, 0.297, 0.814] },
  ],
  // point 0.21 cm off, palm 22.4°, fingers 36.1°
  "turn|forehead|down:out+out10+up2|1h": [
    { UpperArm: [-0.216, 0.128, 1.017], LowerArm: [0, -0.325, 0], Hand: [-1.743, 0.916, 0.756] },
  ],
  // point 0.25 cm off, palm 21.6°, fingers 44.9°
  "turn|forehead|down:out+out4|1h": [
    { UpperArm: [-0.563, 0.386, 0.839], LowerArm: [0, -0.266, 0], Hand: [-1.756, 0.909, 1.213] },
  ],
  // point 0.02 cm off, palm 4.5°, fingers 4.3°
  "turn|forehead|in:up+contra|1h": [
    { UpperArm: [-0.049, 0.041, -0.175], LowerArm: [0, 0.191, 0], Hand: [-0.595, 0.085, -0.733] },
  ],
  // point 0 cm off, palm 0.8°, fingers 1.4°
  "turn|forehead|in:up+ipsi4+out2|1h": [
    { UpperArm: [0.388, 0.042, 0.634], LowerArm: [0, 0.17, 0], Hand: [0.29, 0.22, -0.223] },
  ],
  // point 0 cm off, palm 0.8°, fingers 1.4°
  "turn|forehead|in:up+ipsi4+out4|1h": [
    { UpperArm: [0.389, -0.002, 0.593], LowerArm: [0, 0.089, 0], Hand: [0.267, 0.252, -0.164] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1.4°
  "turn|forehead|in:up+ipsi4|1h": [
    { UpperArm: [0.374, 0.093, 0.677], LowerArm: [0, 0.246, 0], Hand: [0.322, 0.188, -0.282] },
  ],
  // point 0 cm off, palm 0.6°, fingers 1.1°
  "turn|forehead|in:up+ipsi6+out6|2h": [
    { UpperArm: [0.352, -0.165, 0.569], LowerArm: [0, 0.039, 0], Hand: [0.212, 0.203, -0.199] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 2.4°
  "turn|forehead|in:up|1h": [
    { UpperArm: [0.336, 0.279, 0.674], LowerArm: [0, 0.155, 0], Hand: [0.474, 0.368, -0.219] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 2.4°
  "turn|forehead|in:up|2h": [
    { UpperArm: [0.357, 0.216, 0.747], LowerArm: [0, 0.226, 0], Hand: [0.518, 0.286, -0.308] },
  ],
  // point 0.05 cm off, palm 15.7°, fingers 3.9°
  "turn|forehead|out:up+contra+ipsi5|1h": [
    { UpperArm: [-0.403, -0.288, -0.387], LowerArm: [0, 0.159, 0], Hand: [1.708, 1.149, 0.619] },
  ],
  // point 0 cm off, palm 1°, fingers 0.6°
  "turn|head|contra:up+ipsi4+out2|1h": [
    { UpperArm: [-0.099, -0.192, -0.328], LowerArm: [0, 0.051, 0], Hand: [0.33, -0.053, -0.136] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 2.7°
  "turn|head|contra:up+ipsi4|1h": [
    { UpperArm: [-0.127, -0.204, -0.323], LowerArm: [0, 0.109, 0], Hand: [0.314, -0.098, -0.13] },
  ],
  // point 0.04 cm off, palm 7.5°, fingers 8.9°
  "turn|head|in:up+contra|1h": [
    { UpperArm: [-0.383, -0.198, -0.674], LowerArm: [0, 0.015, 0], Hand: [-1.607, -0.392, -0.51] },
  ],
  // point 0.01 cm off, palm 4.6°, fingers 1.7°
  "turn|head|out:up+ipsi8+out8|2h": [
    { UpperArm: [-0.196, -0.251, -0.687], LowerArm: [0, -0.148, 0], Hand: [1.553, 0.148, -0.263] },
  ],
  // point 0.2 cm off, palm 7.4°, fingers 34.2°
  "turn|mouth|contra:out+out5|2h": [
    { UpperArm: [-0.283, 0.688, 0.41], LowerArm: [0, 0.287, 0], Hand: [1.226, -1.196, -1.227] },
  ],
  // point 0.13 cm off, palm 1.1°, fingers 16.3°
  "turn|mouth|contra:out+up|1h": [
    { UpperArm: [-0.034, 0.829, -0.149], LowerArm: [0, 0.26, 0], Hand: [1.194, -0.685, -1.313] },
  ],
  // point 0.26 cm off, palm 5°, fingers 48.8°
  "turn|mouth|contra:out|1h": [
    { UpperArm: [-0.39, 0.925, 0.149], LowerArm: [0, 0.319, 0], Hand: [1.181, -1.21, -1.299] },
  ],
  // point 0.04 cm off, palm 5.4°, fingers 3.8°
  "turn|mouth|contra:up+contra4|2h": [
    { UpperArm: [0.135, 0.658, -0.047], LowerArm: [0, 0.019, 0], Hand: [1.474, 0.297, -1.092] },
  ],
  // point 0.03 cm off, palm 4.7°, fingers 3.3°
  "turn|mouth|contra:up|1h": [
    { UpperArm: [0.095, 0.435, -0.179], LowerArm: [0, 0.051, 0], Hand: [1.239, 0.253, -1.063] },
  ],
  // point 0.05 cm off, palm 6.2°, fingers 7.3°
  "turn|mouth|down:contra+out2|1h": [
    { UpperArm: [-0.85, -0.212, -0.321], LowerArm: [0, -0.194, 0], Hand: [0.47, -0.147, 0.778] },
  ],
  // point 0.04 cm off, palm 5.7°, fingers 6.5°
  "turn|mouth|down:contra+out3|1h": [
    { UpperArm: [-0.844, -0.199, -0.32], LowerArm: [0, -0.233, 0], Hand: [0.496, -0.108, 0.793] },
  ],
  // point 0.08 cm off, palm 15.5°, fingers 22.1°
  "turn|mouth|in:contra+ipsi3|2h": [
    { UpperArm: [-0.717, -0.389, -0.322], LowerArm: [0, -0.135, 0], Hand: [-0.446, -1.211, 0.054] },
  ],
  // point 0.02 cm off, palm 1.8°, fingers 1.9°
  "turn|mouth|in:up+ipsi3|2h": [
    { UpperArm: [0.195, 0.309, -0.057], LowerArm: [0, 0.1, 0], Hand: [-0.375, 0.42, -0.308] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1.4°
  "turn|mouth|in:up+out4|1h": [
    { UpperArm: [0.01, 0.384, 0.04], LowerArm: [0, -0.196, 0], Hand: [-0.311, 0.449, -0.217] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 1.5°
  "turn|mouth|in:up+up3|1h": [
    { UpperArm: [-0.064, 0.431, 0.207], LowerArm: [0, -0.037, 0], Hand: [-0.151, 0.289, -0.429] },
  ],
  // point 0.01 cm off, palm 1.2°, fingers 1.7°
  "turn|mouth|in:up|1h": [
    { UpperArm: [0.062, 0.54, -0.059], LowerArm: [0, -0.037, 0], Hand: [-0.208, 0.549, -0.4] },
  ],
  // point 0.05 cm off, palm 7.7°, fingers 10.6°
  "turn|mouth|out:contra+out2|1h": [
    { UpperArm: [-0.879, -0.28, -0.331], LowerArm: [0, -0.05, 0], Hand: [0.966, 1.086, 0.481] },
  ],
  // point 0.2 cm off, palm 19.5°, fingers 29.3°
  "turn|neck|contra:up|1h": [
    { UpperArm: [0.006, 0.03, -0.003], LowerArm: [0, -0.005, 0], Hand: [1.457, 0.133, -1.318] },
  ],
  // point 0.02 cm off, palm 1°, fingers 3.5°
  "turn|neck|down:in+out4|1h": [
    { UpperArm: [-0.897, 0.094, 0.09], LowerArm: [0, -0.502, 0], Hand: [-0.638, -0.104, 0.974] },
  ],
  // point 0.58 cm off, palm 1.5°, fingers 14.3°
  "turn|neutral-space-high|contra:up+up8+ipsi6|1h": [
    { UpperArm: [-0.336, -0.407, 0.195], LowerArm: [0, -0.145, 0], Hand: [-0.037, 0.141, 0.124] },
  ],
  // point 0.01 cm off, palm 0.5°, fingers 2°
  "turn|neutral-space-high|contra:up|1h": [
    { UpperArm: [-0.064, -0.263, 0.284], LowerArm: [0, -0.138, 0], Hand: [0.108, 0.589, -0.052] },
  ],
  // point 0.78 cm off, palm 17.5°, fingers 17.7°
  "turn|neutral-space-high|down:out+up8|1h": [
    { UpperArm: [-0.299, -0.33, 0.342], LowerArm: [0, 0.032, 0], Hand: [1.61, -0.319, 0.805] },
  ],
  // point 0.01 cm off, palm 2.6°, fingers 4.9°
  "turn|neutral-space-high|down:out|2h": [
    { UpperArm: [-0.07, -0.111, 0.115], LowerArm: [0, 0.113, 0], Hand: [1.391, -0.521, 0.876] },
  ],
  // point 0.01 cm off, palm 2.9°, fingers 1.5°
  "turn|neutral-space-high|in:up|1h": [
    { UpperArm: [0.082, -0.788, 0.747], LowerArm: [0, -0.141, 0], Hand: [-0.914, -0.578, 0.999] },
  ],
  // point 0.01 cm off, palm 3.4°, fingers 1.7°
  "turn|neutral-space-high|out:up+contra3|2h": [
    { UpperArm: [-0.049, 0.144, 0.103], LowerArm: [0, -0.156, 0], Hand: [1.235, -0.623, -0.953] },
  ],
  // point 0.01 cm off, palm 3.4°, fingers 2.7°
  "turn|neutral-space-high|out:up+ipsi4|2h": [
    { UpperArm: [-0.081, -0.212, 0.114], LowerArm: [0, -0.152, 0], Hand: [1.353, -0.308, -0.888] },
  ],
  // point 0.54 cm off, palm 9.8°, fingers 8.8°
  "turn|neutral-space-high|out:up+up8|2h": [
    { UpperArm: [-0.283, -0.321, 0.347], LowerArm: [0, -0.143, 0], Hand: [1.6, -0.265, -0.503] },
  ],
  // point 0.01 cm off, palm 3.4°, fingers 2.1°
  "turn|neutral-space-high|out:up|1h": [
    { UpperArm: [-0.051, -0.02, 0.114], LowerArm: [0, -0.141, 0], Hand: [1.3, -0.485, -0.919] },
  ],
  // point 0.04 cm off, palm 5.3°, fingers 11.8°
  "turn|neutral-space|contra+down:up+contra+contra4|2h": [
    { UpperArm: [-0.117, 0.484, -0.145], LowerArm: [0, -0.285, 0], Hand: [0.728, 1.09, -0.52] },
  ],
  // point 0 cm off, palm 0.6°, fingers 1°
  "turn|neutral-space|contra:out+contra2|2h": [
    { UpperArm: [0.05, -0.043, 0.151], LowerArm: [0, 0.044, 0], Hand: [0.187, -0.27, -0.314] },
  ],
  // point 0 cm off, palm 0.8°, fingers 1°
  "turn|neutral-space|contra:out+contra6|2h": [
    { UpperArm: [0.067, 0.018, 0.254], LowerArm: [0, 0.003, 0], Hand: [0.242, -0.252, -0.4] },
  ],
  // point 0 cm off, palm 0.9°, fingers 1°
  "turn|neutral-space|contra:out+contra7|2h": [
    { UpperArm: [0.068, 0.033, 0.279], LowerArm: [0, -0.013, 0], Hand: [0.254, -0.245, -0.423] },
  ],
  // point 0 cm off, palm 1°, fingers 1°
  "turn|neutral-space|contra:out+contra8.5|2h": [
    { UpperArm: [0.065, 0.056, 0.315], LowerArm: [0, -0.041, 0], Hand: [0.271, -0.234, -0.457] },
  ],
  // point 0 cm off, palm 0.6°, fingers 0.5°
  "turn|neutral-space|contra:out+out8|2h": [
    { UpperArm: [-0.418, 0.036, 0.066], LowerArm: [0, -0.689, 0], Hand: [0.095, 0.007, -0.292] },
  ],
  // point 0 cm off, palm 0.5°, fingers 1°
  "turn|neutral-space|contra:out|1h": [
    { UpperArm: [0.041, -0.085, 0.11], LowerArm: [0, 0.043, 0], Hand: [0.157, -0.282, -0.264] },
  ],
  // point 0 cm off, palm 0.5°, fingers 1°
  "turn|neutral-space|contra:out|2h": [
    { UpperArm: [0.032, -0.072, 0.096], LowerArm: [0, 0.051, 0], Hand: [0.157, -0.274, -0.273] },
  ],
  // point 0.22 cm off, palm 13.5°, fingers 31.9°
  "turn|neutral-space|contra:up+contra1+down10|2h": [
    { UpperArm: [0.041, -0.872, 0.412], LowerArm: [0, -0.916, 0], Hand: [-0.41, 1.209, 1.231] },
  ],
  // point 0.06 cm off, palm 6.2°, fingers 15.7°
  "turn|neutral-space|contra:up+contra2|2h": [
    { UpperArm: [0.093, -0.45, 0.433], LowerArm: [0, -0.316, 0], Hand: [-0.15, 1.175, 0.576] },
  ],
  // point 0.06 cm off, palm 6.2°, fingers 17.7°
  "turn|neutral-space|contra:up+contra5|2h": [
    { UpperArm: [0.045, -0.263, 0.38], LowerArm: [0, -0.334, 0], Hand: [0.139, 1.217, 0.154] },
  ],
  // point 0.07 cm off, palm 6°, fingers 18.3°
  "turn|neutral-space|contra:up+contra6|2h": [
    { UpperArm: [0.02, -0.187, 0.356], LowerArm: [0, -0.346, 0], Hand: [0.263, 1.22, -0.031] },
  ],
  // point 0.03 cm off, palm 3.9°, fingers 7.1°
  "turn|neutral-space|contra:up+contra7+up10|2h": [
    { UpperArm: [-0.114, -0.111, 0.392], LowerArm: [0, -0.122, 0], Hand: [0.419, 1.055, -0.206] },
  ],
  // point 0.07 cm off, palm 5.4°, fingers 19°
  "turn|neutral-space|contra:up+contra7|2h": [
    { UpperArm: [-0.018, -0.079, 0.315], LowerArm: [0, -0.36, 0], Hand: [0.419, 1.212, -0.283] },
  ],
  // point 0.06 cm off, palm 3.9°, fingers 17.4°
  "turn|neutral-space|contra:up|1h": [
    { UpperArm: [-0.039, -0.223, 0.173], LowerArm: [0, -0.307, 0], Hand: [0.167, 1.202, 0.005] },
  ],
  // point 0.03 cm off, palm 6.7°, fingers 6°
  "turn|neutral-space|down:contra+contra4|2h": [
    { UpperArm: [-0.161, 0.378, -0.142], LowerArm: [0, -0.214, 0], Hand: [0.784, 1.08, 0.288] },
  ],
  // point 0.02 cm off, palm 5.8°, fingers 4.2°
  "turn|neutral-space|down:contra+contra6|2h": [
    { UpperArm: [-0.167, 0.513, -0.147], LowerArm: [0, -0.234, 0], Hand: [0.834, 1.042, 0.142] },
  ],
  // point 0.2 cm off, palm 23.2°, fingers 61°
  "turn|neutral-space|down:in+contra6|2h": [
    { UpperArm: [-0.261, 0.761, -0.178], LowerArm: [0, -0.427, 0], Hand: [-0.596, 1.192, 1.486] },
  ],
  // point 0.02 cm off, palm 3.2°, fingers 1.9°
  "turn|neutral-space|down:out+contra4|1h": [
    { UpperArm: [-0.087, 0.713, -0.278], LowerArm: [0, -0.014, 0], Hand: [0.954, -0.73, -0.139] },
  ],
  // point 0.01 cm off, palm 3.7°, fingers 1.8°
  "turn|neutral-space|down:out+contra4|2h": [
    { UpperArm: [-0.017, 0.478, -0.146], LowerArm: [0, 0.029, 0], Hand: [1.25, -0.495, -0.111] },
  ],
  // point 0.01 cm off, palm 3.6°, fingers 1.8°
  "turn|neutral-space|down:out+contra6|2h": [
    { UpperArm: [-0.036, 0.613, -0.156], LowerArm: [0, 0.004, 0], Hand: [1.162, -0.598, -0.155] },
  ],
  // point 0.02 cm off, palm 3.3°, fingers 1.8°
  "turn|neutral-space|down:out+contra8|2h": [
    { UpperArm: [-0.063, 0.776, -0.178], LowerArm: [0, -0.03, 0], Hand: [1.025, -0.708, -0.225] },
  ],
  // point 0.01 cm off, palm 3.4°, fingers 0.5°
  "turn|neutral-space|down:out+contra|1h": [
    { UpperArm: [-0.079, 0.292, -0.242], LowerArm: [0, -0.014, 0], Hand: [1.099, 0.35, 0.063] },
  ],
  // point 0.01 cm off, palm 3.8°, fingers 1.1°
  "turn|neutral-space|down:out+down2|2h": [
    { UpperArm: [0.016, 0.276, -0.141], LowerArm: [0, -0.013, 0], Hand: [1.33, -0.305, -0.145] },
  ],
  // point 0.01 cm off, palm 3.9°, fingers 2.6°
  "turn|neutral-space|down:out+in4|1h": [
    { UpperArm: [0.122, 0.315, -0.24], LowerArm: [0, 0.296, 0], Hand: [1.31, -0.514, 0.078] },
  ],
  // point 0.03 cm off, palm 7.6°, fingers 8.4°
  "turn|neutral-space|down:out+ipsi|1h": [
    { UpperArm: [-0.074, 0.24, -0.03], LowerArm: [0, -0.047, 0], Hand: [1.47, -1.08, -0.075] },
  ],
  // point 1.76 cm off, palm 4.8°, fingers 4.1°
  "turn|neutral-space|down:out+out12+up6|1h": [
    { UpperArm: [-0.631, -0.065, 0.079], LowerArm: [0, -0.825, 0], Hand: [1.602, -0.118, -0.143] },
  ],
  // point 0.01 cm off, palm 3.5°, fingers 0.8°
  "turn|neutral-space|down:out+out4|2h": [
    { UpperArm: [-0.179, 0.394, -0.143], LowerArm: [0, -0.252, 0], Hand: [1.228, -0.308, -0.186] },
  ],
  // point 0.02 cm off, palm 2.9°, fingers 1.9°
  "turn|neutral-space|down:out+up10+out6|1h": [
    { UpperArm: [-0.466, 0.598, -0.255], LowerArm: [0, -0.22, 0], Hand: [0.989, -0.525, 0.111] },
  ],
  // point 0.01 cm off, palm 3.6°, fingers 2.6°
  "turn|neutral-space|down:out+up6|2h": [
    { UpperArm: [-0.115, 0.216, -0.143], LowerArm: [0, 0.194, 0], Hand: [1.4, -0.306, 0.185] },
  ],
  // point 0.23 cm off, palm 4.2°, fingers 1.4°
  "turn|neutral-space|down:out+up8+out10|2h": [
    { UpperArm: [-0.602, 0.18, 0.03], LowerArm: [0, -0.66, 0], Hand: [1.466, -0.138, -0.114] },
  ],
  // point 0.01 cm off, palm 3.5°, fingers 3.4°
  "turn|neutral-space|down:out+up8|1h": [
    { UpperArm: [-0.196, 0.355, -0.243], LowerArm: [0, 0.218, 0], Hand: [1.279, -0.517, 0.311] },
  ],
  // point 0.01 cm off, palm 3.6°, fingers 1.8°
  "turn|neutral-space|down:out|1h": [
    { UpperArm: [-0.041, 0.415, -0.246], LowerArm: [0, 0.045, 0], Hand: [1.181, -0.517, -0.024] },
  ],
  // point 0.01 cm off, palm 3.8°, fingers 1.5°
  "turn|neutral-space|down:out|2h": [
    { UpperArm: [-0.007, 0.254, -0.142], LowerArm: [0, 0.053, 0], Hand: [1.354, -0.305, -0.058] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 1.8°
  "turn|neutral-space|in:contra+contra2+in6|2h": [
    { UpperArm: [0.073, 0.118, -0.145], LowerArm: [0, 0.187, 0], Hand: [-0.095, -0.291, 1.118] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 1.6°
  "turn|neutral-space|in:contra+contra3|2h": [
    { UpperArm: [-0.178, 0.33, -0.141], LowerArm: [0, -0.242, 0], Hand: [-0.196, -0.134, 1.076] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 1.7°
  "turn|neutral-space|in:contra+contra4|1h": [
    { UpperArm: [-0.216, 0.504, -0.204], LowerArm: [0, -0.252, 0], Hand: [-0.391, -0.117, 0.967] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 1.6°
  "turn|neutral-space|in:contra+contra4|2h": [
    { UpperArm: [-0.175, 0.39, -0.142], LowerArm: [0, -0.242, 0], Hand: [-0.234, -0.125, 1.028] },
  ],
  // point 0.01 cm off, palm 1.5°, fingers 1.5°
  "turn|neutral-space|in:contra+contra8|2h": [
    { UpperArm: [-0.191, 0.58, -0.11], LowerArm: [0, -0.269, 0], Hand: [-0.335, -0.093, 0.875] },
  ],
  // point 0.04 cm off, palm 5.6°, fingers 5.7°
  "turn|neutral-space|in:contra+ipsi6|1h": [
    { UpperArm: [-0.239, -0.005, -0.253], LowerArm: [0, -0.238, 0], Hand: [-0.109, -0.172, 1.326] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 1.7°
  "turn|neutral-space|in:contra|1h": [
    { UpperArm: [-0.199, 0.326, -0.242], LowerArm: [0, -0.225, 0], Hand: [-0.302, -0.146, 1.115] },
  ],
  // point 0.01 cm off, palm 2.1°, fingers 2°
  "turn|neutral-space|in:contra|2h": [
    { UpperArm: [-0.2, 0.164, -0.145], LowerArm: [0, -0.253, 0], Hand: [-0.092, -0.146, 1.21] },
  ],
  // point 0.08 cm off, palm 6.1°, fingers 10.8°
  "turn|neutral-space|in:down+contra4|2h": [
    { UpperArm: [-0.224, 0.548, -0.151], LowerArm: [0, -0.132, 0], Hand: [1.121, -0.473, 1.384] },
  ],
  // point 0.02 cm off, palm 1.9°, fingers 6.5°
  "turn|neutral-space|in:up+contra6+in8|2h": [
    { UpperArm: [0.201, 0.327, -0.006], LowerArm: [0, 0.134, 0], Hand: [-1.408, 0.349, 1.109] },
  ],
  // point 1.5 cm off, palm 37.3°, fingers 39°
  "turn|neutral-space|in:up+out10+up6|1h": [
    { UpperArm: [-0.595, -0.278, 0.109], LowerArm: [0, -0.933, 0], Hand: [-0.973, 0.048, 0.838] },
  ],
  // point 0.02 cm off, palm 3.1°, fingers 3.3°
  "turn|neutral-space|in:up+up6|1h": [
    { UpperArm: [0.077, -0.506, 0.483], LowerArm: [0, -0.18, 0], Hand: [-0.848, -0.208, 1.233] },
  ],
  // point 0.01 cm off, palm 2.1°, fingers 2°
  "turn|neutral-space|in:up+up6|2h": [
    { UpperArm: [0.114, -0.59, 0.593], LowerArm: [0, -0.179, 0], Hand: [-0.738, -0.329, 1.18] },
  ],
  // point 0.01 cm off, palm 2.3°, fingers 2.3°
  "turn|neutral-space|in:up+up8|1h": [
    { UpperArm: [0.122, -0.55, 0.585], LowerArm: [0, -0.134, 0], Hand: [-0.777, -0.257, 1.205] },
  ],
  // point 0.05 cm off, palm 7.2°, fingers 7.6°
  "turn|neutral-space|in:up|1h": [
    { UpperArm: [-0.006, -0.404, 0.284], LowerArm: [0, -0.378, 0], Hand: [-0.983, -0.083, 1.352] },
  ],
  // point 0.03 cm off, palm 5.5°, fingers 5.5°
  "turn|neutral-space|in:up|2h": [
    { UpperArm: [-0.002, -0.478, 0.347], LowerArm: [0, -0.38, 0], Hand: [-0.888, -0.195, 1.303] },
  ],
  // point 0.1 cm off, palm 15°, fingers 15.5°
  "turn|neutral-space|out:up+contra4|2h": [
    { UpperArm: [-0.116, 0.324, 0.016], LowerArm: [0, -0.334, 0], Hand: [1.505, -0.256, -1.569] },
  ],
  // point 0.11 cm off, palm 14.7°, fingers 17.3°
  "turn|neutral-space|out:up+contra5+down3+in2|1h": [
    { UpperArm: [-0.095, 0.429, -0.015], LowerArm: [0, -0.38, 0], Hand: [1.456, -0.448, -1.562] },
  ],
  // point 0.1 cm off, palm 15°, fingers 15.8°
  "turn|neutral-space|out:up+contra5|2h": [
    { UpperArm: [-0.123, 0.361, 0.028], LowerArm: [0, -0.345, 0], Hand: [1.507, -0.291, -1.569] },
  ],
  // point 0.1 cm off, palm 15°, fingers 16.1°
  "turn|neutral-space|out:up+contra6|2h": [
    { UpperArm: [-0.133, 0.398, 0.04], LowerArm: [0, -0.359, 0], Hand: [1.508, -0.326, -1.568] },
  ],
  // point 0.11 cm off, palm 15°, fingers 16.6°
  "turn|neutral-space|out:up+contra7|2h": [
    { UpperArm: [-0.144, 0.435, 0.054], LowerArm: [0, -0.375, 0], Hand: [1.509, -0.36, -1.568] },
  ],
  // point 0.05 cm off, palm 8.9°, fingers 9.1°
  "turn|neutral-space|out:up+ipsi+up6|2h": [
    { UpperArm: [0.041, -0.383, 0.495], LowerArm: [0, -0.116, 0], Hand: [1.349, -0.024, -1.393] },
  ],
  // point 0.09 cm off, palm 13.2°, fingers 13.6°
  "turn|neutral-space|out:up+ipsi8|1h": [
    { UpperArm: [-0.165, 0.011, -0.186], LowerArm: [0, -0.317, 0], Hand: [1.383, -0.009, -1.512] },
  ],
  // point 0.06 cm off, palm 9.8°, fingers 10°
  "turn|neutral-space|out:up+up4|1h": [
    { UpperArm: [-0.185, 0.295, -0.117], LowerArm: [0, -0.197, 0], Hand: [1.383, -0.315, -1.427] },
  ],
  // point 0.05 cm off, palm 8.3°, fingers 8.4°
  "turn|neutral-space|out:up+up6|1h": [
    { UpperArm: [-0.215, 0.319, -0.138], LowerArm: [0, -0.146, 0], Hand: [1.356, -0.338, -1.384] },
  ],
  // point 0.04 cm off, palm 6.9°, fingers 7°
  "turn|neutral-space|out:up+up8|1h": [
    { UpperArm: [-0.25, 0.352, -0.162], LowerArm: [0, -0.104, 0], Hand: [1.321, -0.366, -1.345] },
  ],
  // point 0.05 cm off, palm 8.5°, fingers 8.4°
  "turn|neutral-space|out:up+up8|2h": [
    { UpperArm: [-0.211, 0.255, -0.101], LowerArm: [0, -0.086, 0], Hand: [1.413, -0.2, -1.387] },
  ],
  // point 0.09 cm off, palm 13.3°, fingers 13.6°
  "turn|neutral-space|out:up|1h": [
    { UpperArm: [-0.148, 0.268, -0.084], LowerArm: [0, -0.332, 0], Hand: [1.415, -0.277, -1.521] },
  ],
  // point 0.05 cm off, palm 13.8°, fingers 9.6°
  "turn|neutral-space|up:contra|1h": [
    { UpperArm: [-0.173, 0.313, -0.243], LowerArm: [0, -0.189, 0], Hand: [-1.601, -1.171, 0.109] },
  ],
  // point 0.01 cm off, palm 2°, fingers 1.6°
  "turn|neutral-space|up:out+contra2|2h": [
    { UpperArm: [0.732, -0.616, 1.149], LowerArm: [0, 0.044, 0], Hand: [-0.507, -0.462, -0.231] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 1.3°
  "turn|neutral-space|up:out+contra5|2h": [
    { UpperArm: [0.751, -0.544, 1.18], LowerArm: [0, 0.015, 0], Hand: [-0.467, -0.379, -0.208] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 1.2°
  "turn|neutral-space|up:out+contra6|2h": [
    { UpperArm: [0.754, -0.522, 1.189], LowerArm: [0, 0.001, 0], Hand: [-0.454, -0.349, -0.2] },
  ],
  // point 0.03 cm off, palm 6.8°, fingers 7.3°
  "turn|neutral-space|up:out+contra|2h": [
    { UpperArm: [0.17, -0.542, 0.46], LowerArm: [0, -0.013, 0], Hand: [-0.995, -1.053, -0.385] },
  ],
  // point 0 cm off, palm 1.4°, fingers 0.3°
  "turn|neutral-space|up:out+out8|1h": [
    { UpperArm: [0.222, -0.941, 0.841], LowerArm: [0, -0.719, 0], Hand: [-0.459, -0.163, 0.022] },
  ],
  // point 0 cm off, palm 1.4°, fingers 0.6°
  "turn|neutral-space|up:out+out8|2h": [
    { UpperArm: [0.109, -0.932, 0.785], LowerArm: [0, -0.692, 0], Hand: [-0.415, -0.248, -0.082] },
  ],
  // point 0.01 cm off, palm 2.1°, fingers 2.5°
  "turn|neutral-space|up:out+up6|2h": [
    { UpperArm: [0.761, -0.62, 1.347], LowerArm: [0, 0.193, 0], Hand: [-0.43, -0.609, -0.389] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 1.5°
  "turn|neutral-space|up:out|1h": [
    { UpperArm: [0.754, -0.637, 1.109], LowerArm: [0, 0.043, 0], Hand: [-0.524, -0.437, -0.115] },
  ],
  // point 0.01 cm off, palm 2.2°, fingers 1.8°
  "turn|neutral-space|up:out|2h": [
    { UpperArm: [0.709, -0.669, 1.12], LowerArm: [0, 0.052, 0], Hand: [-0.535, -0.513, -0.246] },
  ],
  // point 0.02 cm off, palm 4.6°, fingers 3.1°
  "turn|nose|contra:up+out4|1h": [
    { UpperArm: [0.098, 0.224, 0.076], LowerArm: [0, -0.098, 0], Hand: [1.163, 0.546, -0.616] },
  ],
  // point 0.02 cm off, palm 4.7°, fingers 3.1°
  "turn|nose|contra:up+out6|1h": [
    { UpperArm: [0.092, 0.147, 0.151], LowerArm: [0, -0.188, 0], Hand: [1.149, 0.631, -0.537] },
  ],
  // point 0.02 cm off, palm 4.6°, fingers 3.2°
  "turn|nose|contra:up|1h": [
    { UpperArm: [0.114, 0.361, -0.013], LowerArm: [0, 0.067, 0], Hand: [1.215, 0.384, -0.712] },
  ],
  // point 0.06 cm off, palm 7.3°, fingers 8.9°
  "turn|nose|down:contra+down3|1h": [
    { UpperArm: [-0.707, -0.229, -0.439], LowerArm: [0, -0.1, 0], Hand: [0.377, -0.059, 0.795] },
  ],
  // point 0.22 cm off, palm 16.8°, fingers 44.6°
  "turn|nose|down:out+out6+down4|1h": [
    { UpperArm: [-0.663, -0.128, -0.395], LowerArm: [0, 0.248, 0], Hand: [1.495, -0.358, 1.081] },
  ],
  // point 0.02 cm off, palm 1.2°, fingers 2°
  "turn|nose|in:up+down3|1h": [
    { UpperArm: [0.215, 0.592, -0.223], LowerArm: [0, -0.023, 0], Hand: [-0.233, 0.761, -0.365] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1.6°
  "turn|nose|in:up+out4|1h": [
    { UpperArm: [0.066, 0.317, 0.124], LowerArm: [0, -0.178, 0], Hand: [-0.254, 0.413, -0.215] },
  ],
  // point 0.01 cm off, palm 0.8°, fingers 1.6°
  "turn|nose|in:up+out5|1h": [
    { UpperArm: [0.063, 0.276, 0.153], LowerArm: [0, -0.22, 0], Hand: [-0.257, 0.383, -0.17] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1.7°
  "turn|nose|in:up+out6|2h": [
    { UpperArm: [0.131, 0.286, 0.222], LowerArm: [0, -0.209, 0], Hand: [-0.184, 0.301, -0.165] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 1.9°
  "turn|nose|in:up|1h": [
    { UpperArm: [0.078, 0.477, 0.048], LowerArm: [0, -0.019, 0], Hand: [-0.185, 0.494, -0.395] },
  ],
  // point 0.02 cm off, palm 1°, fingers 5.3°
  "turn|shoulder|contra:up+out6|1h": [
    { UpperArm: [0.463, 0.054, 0.01], LowerArm: [0, 0.018, 0], Hand: [-0.561, -1.004, 0.112] },
  ],
  // point 0.04 cm off, palm 2.9°, fingers 4.7°
  "turn|shoulder|contra:up|1h": [
    { UpperArm: [0.756, -0.08, 0.018], LowerArm: [0, 0.272, 0], Hand: [-0.515, -0.966, 0.119] },
  ],
  // point 0.04 cm off, palm 2.9°, fingers 4.7°
  "turn|shoulder|contra:up|2h": [
    { UpperArm: [0.756, -0.08, 0.018], LowerArm: [0, 0.272, 0], Hand: [-0.515, -0.966, 0.119] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 0.4°
  "turn|shoulder|down:in+out8|1h": [
    { UpperArm: [-0.42, 0.394, 0.029], LowerArm: [0, -0.543, 0], Hand: [0.094, 0.529, 0.333] },
  ],
  // point 0 cm off, palm 1.5°, fingers 0.6°
  "turn|shoulder|down:in|1h": [
    { UpperArm: [-0.206, 0.254, 0.018], LowerArm: [0, -0.034, 0], Hand: [0.217, 0.53, 0.037] },
  ],
  // point 0 cm off, palm 1.5°, fingers 0.6°
  "turn|shoulder|down:in|2h": [
    { UpperArm: [-0.206, 0.254, 0.018], LowerArm: [0, -0.034, 0], Hand: [0.217, 0.53, 0.037] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 3°
  "turn|shoulder|in:up+out10|1h": [
    { UpperArm: [0.342, 0.232, 0.008], LowerArm: [0, -0.137, 0], Hand: [0.152, 0.522, -0.839] },
  ],
  // point 0.09 cm off, palm 10.9°, fingers 15°
  "turn|shoulder|in:up+up8|1h": [
    { UpperArm: [0.374, 0.283, 0.006], LowerArm: [0, 0.424, 0], Hand: [0.267, 0.329, -1.212] },
  ],
  // point 0.1 cm off, palm 7.9°, fingers 18.3°
  "turn|shoulder|out:up+up4|2h": [
    { UpperArm: [1.805, -0.484, 2.254], LowerArm: [0, 0.534, 0], Hand: [-0.229, -0.262, 0.692] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 1.8°
  "turn|weak-hand|contra:out+down10|1h": [
    { UpperArm: [0.061, -1.051, 0.868], LowerArm: [0, -0.41, 0], Hand: [-0.286, 0.656, -0.389] },
  ],
  // point 0.01 cm off, palm 1.3°, fingers 0.8°
  "turn|weak-hand|contra:out+down1|1h": [
    { UpperArm: [0.051, -1.064, 0.956], LowerArm: [0, -0.059, 0], Hand: [-0.229, 0.292, -0.323] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 0.9°
  "turn|weak-hand|contra:out+down2|1h": [
    { UpperArm: [0.05, -1.044, 0.929], LowerArm: [0, -0.087, 0], Hand: [-0.26, 0.326, -0.345] },
  ],
  // point 0.01 cm off, palm 1.5°, fingers 1°
  "turn|weak-hand|contra:out+down3|1h": [
    { UpperArm: [0.049, -1.027, 0.907], LowerArm: [0, -0.117, 0], Hand: [-0.286, 0.362, -0.363] },
  ],
  // point 0.01 cm off, palm 1.9°, fingers 0.9°
  "turn|weak-hand|contra:out+down5+ipsi3|1h": [
    { UpperArm: [0.066, -0.966, 0.748], LowerArm: [0, -0.084, 0], Hand: [-0.439, 0.4, -0.377] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 1.2°
  "turn|weak-hand|contra:out+down6|1h": [
    { UpperArm: [0.05, -0.998, 0.863], LowerArm: [0, -0.224, 0], Hand: [-0.328, 0.48, -0.398] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 1.5°
  "turn|weak-hand|contra:out+down8|1h": [
    { UpperArm: [0.053, -1.006, 0.855], LowerArm: [0, -0.31, 0], Hand: [-0.325, 0.565, -0.402] },
  ],
  // point 0.02 cm off, palm 2.7°, fingers 3.3°
  "turn|weak-hand|contra:out+in10|1h": [
    { UpperArm: [0.198, -0.39, 0.467], LowerArm: [0, 0.451, 0], Hand: [-0.87, 0.181, -1] },
  ],
  // point 0.02 cm off, palm 2.6°, fingers 1.2°
  "turn|weak-hand|contra:out+in4+down2|1h": [
    { UpperArm: [0.075, -0.662, 0.668], LowerArm: [0, 0.134, 0], Hand: [-0.642, 0.264, -0.665] },
  ],
  // point 0.02 cm off, palm 2.7°, fingers 1.1°
  "turn|weak-hand|contra:out+in4+down5|1h": [
    { UpperArm: [0.099, -0.598, 0.615], LowerArm: [0, 0.04, 0], Hand: [-0.69, 0.397, -0.703] },
  ],
  // point 0 cm off, palm 0.8°, fingers 0.5°
  "turn|weak-hand|contra:out+up3|1h": [
    { UpperArm: [0.044, -1.133, 1.066], LowerArm: [0, 0.029, 0], Hand: [-0.102, 0.169, -0.236] },
  ],
  // point 0 cm off, palm 0.8°, fingers 0.5°
  "turn|weak-hand|contra:out+up4|1h": [
    { UpperArm: [0.027, -1.133, 1.077], LowerArm: [0, 0.046, 0], Hand: [-0.093, 0.135, -0.23] },
  ],
  // point 0 cm off, palm 1.2°, fingers 0.8°
  "turn|weak-hand|contra:out|1h": [
    { UpperArm: [0.053, -1.087, 0.986], LowerArm: [0, -0.033, 0], Hand: [-0.193, 0.26, -0.298] },
  ],
  // point 0.09 cm off, palm 13.6°, fingers 17.1°
  "turn|weak-hand|contra:up+down3|1h": [
    { UpperArm: [-0.221, -0.287, 0.523], LowerArm: [0, -0.454, 0], Hand: [0.242, 1.2, -1.329] },
  ],
  // point 0.07 cm off, palm 11.6°, fingers 13.5°
  "turn|weak-hand|contra:up|1h": [
    { UpperArm: [-0.243, -0.265, 0.48], LowerArm: [0, -0.351, 0], Hand: [0.175, 1.169, -1.289] },
  ],
  // point 0.02 cm off, palm 0.7°, fingers 6.9°
  "turn|weak-hand|down:contra+down1|1h": [
    { UpperArm: [0.064, 0.072, -0.138], LowerArm: [0, -0.163, 0], Hand: [-0.005, 1.048, -0.097] },
  ],
  // point 0.02 cm off, palm 0.9°, fingers 6.9°
  "turn|weak-hand|down:contra+down2|1h": [
    { UpperArm: [0.117, 0.108, -0.181], LowerArm: [0, -0.192, 0], Hand: [0.007, 1.048, -0.15] },
  ],
  // point 0.02 cm off, palm 1.1°, fingers 6.8°
  "turn|weak-hand|down:contra+down3|1h": [
    { UpperArm: [0.174, 0.144, -0.228], LowerArm: [0, -0.224, 0], Hand: [0.018, 1.048, -0.202] },
  ],
  // point 0.02 cm off, palm 0.1°, fingers 6.8°
  "turn|weak-hand|down:contra+up3|1h": [
    { UpperArm: [-0.12, -0.063, 0.009], LowerArm: [0, -0.072, 0], Hand: [-0.062, 1.046, 0.108] },
  ],
  // point 0.02 cm off, palm 0.3°, fingers 6.7°
  "turn|weak-hand|down:contra+up4|1h": [
    { UpperArm: [-0.163, -0.096, 0.043], LowerArm: [0, -0.055, 0], Hand: [-0.076, 1.045, 0.159] },
  ],
  // point 0.02 cm off, palm 0.6°, fingers 6.5°
  "turn|weak-hand|down:contra+up6|1h": [
    { UpperArm: [-0.247, -0.163, 0.112], LowerArm: [0, -0.029, 0], Hand: [-0.103, 1.042, 0.263] },
  ],
  // point 0.02 cm off, palm 0.5°, fingers 6.9°
  "turn|weak-hand|down:contra|1h": [
    { UpperArm: [0.015, 0.037, -0.099], LowerArm: [0, -0.136, 0], Hand: [-0.019, 1.048, -0.046] },
  ],
  // point 0 cm off, palm 0.2°, fingers 1°
  "turn|weak-hand|down:out+contra+down2|1h": [
    { UpperArm: [0.078, 0.031, -0.062], LowerArm: [0, -0.066, 0], Hand: [-0.014, 0.29, -0.072] },
  ],
  // point 0 cm off, palm 0.3°, fingers 1°
  "turn|weak-hand|down:out+contra+down3|1h": [
    { UpperArm: [0.093, 0.039, -0.052], LowerArm: [0, -0.096, 0], Hand: [-0.002, 0.303, -0.1] },
  ],
  // point 0 cm off, palm 0.3°, fingers 1°
  "turn|weak-hand|down:out+contra+down4|1h": [
    { UpperArm: [0.106, 0.047, -0.041], LowerArm: [0, -0.129, 0], Hand: [0.009, 0.317, -0.128] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.9°
  "turn|weak-hand|down:out+contra+up2|1h": [
    { UpperArm: [-0.023, -0.015, -0.05], LowerArm: [0, 0.032, 0], Hand: [-0.039, 0.249, 0.05] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.9°
  "turn|weak-hand|down:out+contra|1h": [
    { UpperArm: [0.042, 0.018, -0.077], LowerArm: [0, -0.012, 0], Hand: [-0.04, 0.265, -0.019] },
  ],
  // point 0 cm off, palm 0.5°, fingers 1.5°
  "turn|weak-hand|down:out+down1|1h": [
    { UpperArm: [-0.094, -0.019, 0.185], LowerArm: [0, -0.058, 0], Hand: [0.086, -0.496, -0.022] },
  ],
  // point 0 cm off, palm 0.5°, fingers 1.4°
  "turn|weak-hand|down:out+down2|1h": [
    { UpperArm: [-0.086, -0.035, 0.213], LowerArm: [0, -0.086, 0], Hand: [0.1, -0.473, -0.052] },
  ],
  // point 0 cm off, palm 0.4°, fingers 1.4°
  "turn|weak-hand|down:out+down3|1h": [
    { UpperArm: [-0.08, -0.05, 0.242], LowerArm: [0, -0.117, 0], Hand: [0.113, -0.449, -0.083] },
  ],
  // point 0.01 cm off, palm 1.1°, fingers 1.8°
  "turn|weak-hand|down:out+in6+down4|1h": [
    { UpperArm: [0.19, -0.029, 0.09], LowerArm: [0, 0.175, 0], Hand: [0.169, -0.645, -0.073] },
  ],
  // point 0.01 cm off, palm 3.2°, fingers 3°
  "turn|weak-hand|down:out+in8+up4|1h": [
    { UpperArm: [0.112, 0.095, -0.179], LowerArm: [0, 0.458, 0], Hand: [-0.043, -0.925, 0.091] },
  ],
  // point 0.01 cm off, palm 0.7°, fingers 1.8°
  "turn|weak-hand|down:out+up3|1h": [
    { UpperArm: [-0.14, 0.039, 0.076], LowerArm: [0, 0.031, 0], Hand: [0.016, -0.573, 0.085] },
  ],
  // point 0.01 cm off, palm 2.2°, fingers 2.2°
  "turn|weak-hand|down:out+up5|1h": [
    { UpperArm: [-0.218, -0.012, 0.129], LowerArm: [0, 0.063, 0], Hand: [0.131, -0.567, 0.22] },
  ],
  // point 0 cm off, palm 0.6°, fingers 1.6°
  "turn|weak-hand|down:out|1h": [
    { UpperArm: [-0.103, -0.004, 0.156], LowerArm: [0, -0.032, 0], Hand: [0.07, -0.517, 0.006] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 2.4°
  "turn|weak-hand|in:contra+down1|1h": [
    { UpperArm: [-0.184, -0.764, 0.585], LowerArm: [0, -0.186, 0], Hand: [-0.697, 0.311, 1.048] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 2.6°
  "turn|weak-hand|in:contra+down3|1h": [
    { UpperArm: [-0.162, -0.759, 0.586], LowerArm: [0, -0.247, 0], Hand: [-0.679, 0.387, 1.054] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 2.7°
  "turn|weak-hand|in:contra+down4|1h": [
    { UpperArm: [-0.153, -0.758, 0.588], LowerArm: [0, -0.281, 0], Hand: [-0.669, 0.426, 1.057] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 3°
  "turn|weak-hand|in:contra+down6|1h": [
    { UpperArm: [-0.142, -0.759, 0.595], LowerArm: [0, -0.359, 0], Hand: [-0.645, 0.506, 1.065] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 3.1°
  "turn|weak-hand|in:contra+down7|1h": [
    { UpperArm: [-0.14, -0.761, 0.601], LowerArm: [0, -0.404, 0], Hand: [-0.631, 0.548, 1.069] },
  ],
  // point 0.01 cm off, palm 1.5°, fingers 2.7°
  "turn|weak-hand|in:contra+in3+down5|1h": [
    { UpperArm: [-0.015, -0.702, 0.536], LowerArm: [0, -0.108, 0], Hand: [-0.707, 0.403, 0.988] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 2.3°
  "turn|weak-hand|in:contra|1h": [
    { UpperArm: [-0.197, -0.768, 0.587], LowerArm: [0, -0.16, 0], Hand: [-0.705, 0.274, 1.045] },
  ],
  // point 0.04 cm off, palm 4.9°, fingers 11.3°
  "turn|weak-hand|in:down+down2|1h": [
    { UpperArm: [-0.251, 0.041, 0.178], LowerArm: [0, -0.212, 0], Hand: [-0.304, -0.446, 1.261] },
  ],
  // point 0.03 cm off, palm 3.3°, fingers 7.4°
  "turn|weak-hand|in:down+down4|1h": [
    { UpperArm: [-0.204, 0.12, 0.148], LowerArm: [0, -0.276, 0], Hand: [-0.334, -0.415, 1.232] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 2.6°
  "turn|weak-hand|in:down+down8|1h": [
    { UpperArm: [-0.087, 0.3, 0.062], LowerArm: [0, -0.43, 0], Hand: [-0.5, -0.335, 1.088] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 2.3°
  "turn|weak-hand|in:down+down9|1h": [
    { UpperArm: [-0.088, 0.322, 0.083], LowerArm: [0, -0.473, 0], Hand: [-0.518, -0.309, 1.055] },
  ],
  // point 0.09 cm off, palm 9.2°, fingers 24°
  "turn|weak-hand|in:down+up4|1h": [
    { UpperArm: [-0.4, -0.182, 0.289], LowerArm: [0, -0.08, 0], Hand: [-0.237, -0.517, 1.333] },
  ],
  // point 0.11 cm off, palm 10.6°, fingers 28.6°
  "turn|weak-hand|in:down+up6|1h": [
    { UpperArm: [-0.452, -0.257, 0.333], LowerArm: [0, -0.054, 0], Hand: [-0.216, -0.536, 1.353] },
  ],
  // point 0.07 cm off, palm 9.6°, fingers 15°
  "turn|weak-hand|in:up+down3|1h": [
    { UpperArm: [-0.017, -1.244, 0.943], LowerArm: [0, -0.477, 0], Hand: [-1.459, 0.89, 1.42] },
  ],
  // point 0.08 cm off, palm 10.3°, fingers 16.3°
  "turn|weak-hand|in:up+down4|1h": [
    { UpperArm: [-0.023, -1.24, 0.928], LowerArm: [0, -0.519, 0], Hand: [-1.463, 0.909, 1.44] },
  ],
  // point 0.1 cm off, palm 12°, fingers 19.1°
  "turn|weak-hand|in:up+down6|1h": [
    { UpperArm: [-0.036, -1.242, 0.905], LowerArm: [0, -0.615, 0], Hand: [-1.458, 0.944, 1.482] },
  ],
  // point 0.12 cm off, palm 13.2°, fingers 19.7°
  "turn|weak-hand|in:up+out3+down4|1h": [
    { UpperArm: [-0.155, -1.408, 0.946], LowerArm: [0, -0.803, 0], Hand: [-1.333, 0.919, 1.494] },
  ],
  // point 0.03 cm off, palm 4.5°, fingers 7.2°
  "turn|weak-hand|in:up+up6|1h": [
    { UpperArm: [0.035, -1.372, 1.18], LowerArm: [0, -0.22, 0], Hand: [-1.29, 0.694, 1.279] },
  ],
  // point 0.01 cm off, palm 3.6°, fingers 3.8°
  "turn|weak-hand|ipsi:out|1h": [
    { UpperArm: [0.014, 0.15, -0.071], LowerArm: [0, -0.026, 0], Hand: [1.465, 0.451, 1.182] },
  ],
  // point 0.05 cm off, palm 6.9°, fingers 10.6°
  "turn|weak-hand|out:up+down1|1h": [
    { UpperArm: [-0.241, -0.464, 0.581], LowerArm: [0, -0.416, 0], Hand: [0.784, -0.088, -1.336] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 2.7°
  "turn|weak-hand|up:contra+down14|1h": [
    { UpperArm: [-0.06, -1.544, 0.887], LowerArm: [0, -0.908, 0], Hand: [-0.558, -0.492, 1] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 2.4°
  "turn|weak-hand|up:contra+down3|1h": [
    { UpperArm: [0.29, -1.628, 1.321], LowerArm: [0, -0.248, 0], Hand: [-0.645, -0.993, 0.642] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 0.7°
  "turn|weak-hand|up:out+contra+down3|1h": [
    { UpperArm: [0.928, -1.676, 1.993], LowerArm: [0, -0.097, 0], Hand: [-0.525, -0.373, 0.43] },
  ],
  // point 0.01 cm off, palm 1.9°, fingers 1.9°
  "turn|weak-hand|up:out+down10+ipsi6|1h": [
    { UpperArm: [1.039, -1.839, 1.927], LowerArm: [0, -0.211, 0], Hand: [-0.868, 0.309, 0.438] },
  ],
  // point 0.06 cm off, palm 6.5°, fingers 0.4°
  "turn|weak-hand|up:out+down2|1h": [
    { UpperArm: [0.055, -1.06, 0.942], LowerArm: [0, -0.092, 0], Hand: [-1.622, 0.91, -0.238] },
  ],
  // point 0.07 cm off, palm 7.3°, fingers 0.2°
  "turn|weak-hand|up:out+down3|1h": [
    { UpperArm: [0.055, -1.045, 0.921], LowerArm: [0, -0.124, 0], Hand: [-1.636, 0.933, -0.209] },
  ],
  // point 0.01 cm off, palm 1.5°, fingers 2.5°
  "turn|weak-hand|up:out+down9|1h": [
    { UpperArm: [1.11, -1.755, 2.061], LowerArm: [0, -0.355, 0], Hand: [-0.743, 0.5, 0.478] },
  ],
};

/** How close each fit came. */
export const FITTED_NOTES = {
  "path|belly|in:contra|2h|linear:up": "worst point 0 cm off, palm 0.9°, fingers 0.3°",
  "path|belly|in:down+ipsi12|1h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|cheek|contra:up+ipsi4|1h|arc:out": "worst point 0 cm off, palm 0.2°, fingers 0.9°",
  "path|cheek|contra:up|1h|arc:out": "worst point 0 cm off, palm 0.2°, fingers 1.1°",
  "path|cheek|contra:up|1h|linear:ipsi": "worst point 0.01 cm off, palm 0.7°, fingers 0.5°",
  "path|cheek|contra:up|1h|linear:out": "worst point 0 cm off, palm 0.2°, fingers 1.1°",
  "path|cheek|contra:up|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|cheek|down:contra|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|cheek|in:contra|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.6°",
  "path|cheek|in:up|1h|linear:out": "worst point 0 cm off, palm 0.6°, fingers 0.6°",
  "path|cheek|in:up|1h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|cheek|in:up|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.3°",
  "path|chest-front|contra:out+ipsi4|2h|linear:down": "worst point 0 cm off, palm 0.1°, fingers 1.3°",
  "path|chest-front|contra:out|2h|arc:out": "worst point 0 cm off, palm 0.1°, fingers 0.3°",
  "path|chest-front|down:out+ipsi4|2h|linear:down": "worst point 0.01 cm off, palm 1.2°, fingers 1°",
  "path|chest-front|down:out|1h|linear:up": "worst point 0.01 cm off, palm 1.2°, fingers 1.8°",
  "path|chest-front|down:out|2h|arc:out": "worst point 0 cm off, palm 0.1°, fingers 0.3°",
  "path|chest-front|in:contra+in2|2h|linear:out+up": "worst point 0 cm off, palm 0.5°, fingers 0.1°",
  "path|chest-front|in:contra+in2|2h|linear:up": "worst point 0 cm off, palm 1.1°, fingers 0.2°",
  "path|chest-front|in:contra|2h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|chest-front|up:out|1h|arc:out": "worst point 0 cm off, palm 0.5°, fingers 0.4°",
  "path|chest-front|up:out|2h|arc:out": "worst point 0 cm off, palm 0.2°, fingers 0.2°",
  "path|chest|contra:in|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|chest|contra:up|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|chest|down:in+contra+contra9|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.5°",
  "path|chest|down:in+contra|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.2°",
  "path|chest|in:contra+ipsi4|2h|linear:out": "worst point 0 cm off, palm 0.2°, fingers 0.1°",
  "path|chest|in:contra+up4|2h|linear:down": "worst point 0 cm off, palm 1°, fingers 0.5°",
  "path|chest|in:contra|1h|linear:down": "worst point 0 cm off, palm 0.6°, fingers 0.4°",
  "path|chest|in:contra|1h|linear:up": "worst point 0 cm off, palm 0.8°, fingers 0.6°",
  "path|chest|in:contra|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|chest|in:up+contra13+up5|1h|tap": "worst point 0 cm off, palm 0.6°, fingers 0.5°",
  "path|chest|in:up+contra6|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.3°",
  "path|chest|in:up|1h|linear:out": "worst point 0 cm off, palm 0.3°, fingers 0.4°",
  "path|chest|in:up|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|chest|in:up|2h|nod": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|chest|in:up|2h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|chin|contra:up|1h|linear:down": "worst point 0.33 cm off, palm 10.1°, fingers 14.3°",
  "path|chin|contra:up|1h|linear:out": "worst point 0 cm off, palm 0.5°, fingers 0.8°",
  "path|chin|contra:up|1h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|chin|contra:up|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.3°",
  "path|chin|down:contra+down4|1h|linear:down": "worst point 0.01 cm off, palm 1.5°, fingers 0.9°",
  "path|chin|down:contra|1h|linear:ipsi": "worst point 0 cm off, palm 0.3°, fingers 0.3°",
  "path|chin|in:contra|1h|linear:down": "worst point 0.02 cm off, palm 2.5°, fingers 2.2°",
  "path|chin|in:contra|1h|tap": "worst point 0 cm off, palm 0.8°, fingers 0.4°",
  "path|chin|in:up+contra2|1h|tap": "worst point 0 cm off, palm 0.5°, fingers 0.2°",
  "path|chin|in:up+ipsi2|1h|tap": "worst point 0 cm off, palm 0.5°, fingers 0.2°",
  "path|chin|in:up|1h|linear:down": "worst point 0.08 cm off, palm 4.6°, fingers 8.4°",
  "path|chin|in:up|1h|linear:out+down": "worst point 0.01 cm off, palm 1.8°, fingers 1.1°",
  "path|chin|in:up|1h|tap": "worst point 0 cm off, palm 0.5°, fingers 0.2°",
  "path|chin|in:up|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|eye|contra:up+ipsi6|2h|linear:out": "worst point 0 cm off, palm 0.3°, fingers 1.3°",
  "path|eye|contra:up+out8+ipsi4|1h|linear:down+contra": "worst point 0.01 cm off, palm 0.9°, fingers 1.3°",
  "path|eye|down:contra+ipsi4|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|eye|down:out+out4|2h|linear:out": "worst point 0 cm off, palm 0.7°, fingers 1.6°",
  "path|eye|in:up+down2|1h|linear:out": "worst point 0 cm off, palm 0.5°, fingers 0.6°",
  "path|eye|in:up+down2|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|eye|in:up+out3|1h|linear:down": "worst point 0.01 cm off, palm 0.4°, fingers 3.4°",
  "path|forearm|contra:out+down3|1h|linear:contra": "worst point 0 cm off, palm 0.4°, fingers 0.3°",
  "path|forearm|down:contra+down3|1h|linear:contra": "worst point 0.01 cm off, palm 1.1°, fingers 1.5°",
  "path|forearm|down:contra+down3|1h|tap": "worst point 0 cm off, palm 0.5°, fingers 0.2°",
  "path|forehead|contra:out+out8+ipsi7+up2|2h|linear:out": "worst point 0.01 cm off, palm 1.8°, fingers 2.4°",
  "path|forehead|contra:up+out+out4|1h|linear:out": "worst point 0.01 cm off, palm 0.5°, fingers 2°",
  "path|forehead|contra:up+up4+out2|1h|linear:out+down": "worst point 0 cm off, palm 0.3°, fingers 1.5°",
  "path|forehead|contra:up|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.4°",
  "path|forehead|down:contra|1h|linear:ipsi": "worst point 0.01 cm off, palm 1.6°, fingers 2°",
  "path|forehead|in:up+contra|1h|tap": "worst point 0 cm off, palm 0.7°, fingers 0.5°",
  "path|forehead|in:up+ipsi4|1h|linear:out+up": "worst point 0 cm off, palm 0.1°, fingers 0.2°",
  "path|forehead|in:up+ipsi6+out6|2h|linear:down+contra": "worst point 0.01 cm off, palm 1°, fingers 1.3°",
  "path|forehead|in:up|1h|linear:out+up": "worst point 0 cm off, palm 0.2°, fingers 0.2°",
  "path|forehead|in:up|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.2°",
  "path|forehead|out:up+contra+ipsi5|1h|linear:out+ipsi": "worst point 0 cm off, palm 0.7°, fingers 1°",
  "path|head|contra:up+ipsi4|1h|linear:out": "worst point 0 cm off, palm 0.2°, fingers 1.1°",
  "path|head|contra:up+ipsi4|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|head|in:up+contra|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.8°",
  "path|head|out:up+ipsi8+out8|2h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|mouth|contra:out+out5|2h|linear:out": "worst point 0.01 cm off, palm 1.1°, fingers 1.5°",
  "path|mouth|contra:up|1h|linear:down": "worst point 0.01 cm off, palm 0.4°, fingers 1.1°",
  "path|mouth|contra:up|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.3°",
  "path|mouth|down:contra+out2|1h|linear:contra": "worst point 0.01 cm off, palm 0.7°, fingers 0.8°",
  "path|mouth|in:contra+ipsi3|2h|linear:up+ipsi": "worst point 0.03 cm off, palm 0.3°, fingers 5.8°",
  "path|mouth|in:up+ipsi3|2h|linear:up+ipsi": "worst point 0.01 cm off, palm 0.5°, fingers 0.6°",
  "path|mouth|in:up+out4|1h|linear:out+down": "worst point 0.01 cm off, palm 0.5°, fingers 0.7°",
  "path|mouth|in:up+out4|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|mouth|in:up+up3|1h|arc:out": "worst point 0 cm off, palm 0.6°, fingers 0.4°",
  "path|mouth|in:up+up3|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.1°",
  "path|mouth|in:up|1h|linear:down": "worst point 0.01 cm off, palm 1.2°, fingers 1.1°",
  "path|mouth|in:up|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|mouth|in:up|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|neck|contra:up|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|neck|down:in+out4|1h|linear:out": "worst point 0.01 cm off, palm 0.4°, fingers 1°",
  "path|neutral-space-high|down:out|2h|linear:down": "worst point 0 cm off, palm 0.4°, fingers 0.4°",
  "path|neutral-space-high|out:up+contra3|2h|linear:up": "worst point 0.3 cm off, palm 4.4°, fingers 4.4°",
  "path|neutral-space-high|out:up|1h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|neutral-space|contra+down:up+contra+contra4|2h|linear:ipsi": "worst point 0.02 cm off, palm 5.7°, fingers 1.4°",
  "path|neutral-space|contra+down:up+contra+contra4|2h|twist": "worst point 0 cm off, palm 0.2°, fingers 0.1°",
  "path|neutral-space|contra:out+contra2|2h|linear:out": "worst point 0.01 cm off, palm 0°, fingers 0.8°",
  "path|neutral-space|contra:out+contra6|2h|linear:ipsi": "worst point 0 cm off, palm 0.3°, fingers 0.3°",
  "path|neutral-space|contra:out+contra6|2h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|neutral-space|contra:out+contra7|2h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|neutral-space|contra:out|1h|linear:out": "worst point 0.01 cm off, palm 0.1°, fingers 0.8°",
  "path|neutral-space|contra:out|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|neutral-space|contra:out|2h|arc:out": "worst point 0.01 cm off, palm 0°, fingers 0.8°",
  "path|neutral-space|contra:out|2h|linear:out": "worst point 0.01 cm off, palm 0°, fingers 0.8°",
  "path|neutral-space|contra:out|2h|linear:up": "worst point 0 cm off, palm 0°, fingers 0.9°",
  "path|neutral-space|contra:up+contra5|2h|twist": "worst point 0 cm off, palm 0.3°, fingers 0.1°",
  "path|neutral-space|contra:up+contra6|2h|linear:ipsi": "worst point 0 cm off, palm 2°, fingers 0.3°",
  "path|neutral-space|down:contra+contra4|2h|linear:ipsi": "worst point 0.02 cm off, palm 3°, fingers 4.7°",
  "path|neutral-space|down:contra+contra6|2h|linear:ipsi": "worst point 0.02 cm off, palm 3.1°, fingers 3.6°",
  "path|neutral-space|down:contra+contra6|2h|linear:up": "worst point 0.01 cm off, palm 2.2°, fingers 1.1°",
  "path|neutral-space|down:out+contra4|1h|linear:ipsi": "worst point 0.01 cm off, palm 1.2°, fingers 1.1°",
  "path|neutral-space|down:out+contra4|2h|linear:down+ipsi": "worst point 0 cm off, palm 0.3°, fingers 0.9°",
  "path|neutral-space|down:out+contra4|2h|linear:ipsi": "worst point 0 cm off, palm 0.6°, fingers 1°",
  "path|neutral-space|down:out+contra6|2h|linear:ipsi": "worst point 0 cm off, palm 0.8°, fingers 1.1°",
  "path|neutral-space|down:out+contra6|2h|linear:out+contra": "worst point 0.01 cm off, palm 0.4°, fingers 0.3°",
  "path|neutral-space|down:out+contra8|2h|linear:ipsi": "worst point 0.01 cm off, palm 1.2°, fingers 1.1°",
  "path|neutral-space|down:out+contra8|2h|linear:out+ipsi": "worst point 0 cm off, palm 0.3°, fingers 0.8°",
  "path|neutral-space|down:out+in4|1h|linear:out": "worst point 0 cm off, palm 0.3°, fingers 0.5°",
  "path|neutral-space|down:out+ipsi|1h|linear:out+ipsi": "worst point 0.01 cm off, palm 0.9°, fingers 0.6°",
  "path|neutral-space|down:out+up6|2h|linear:down": "worst point 0 cm off, palm 0.5°, fingers 0.5°",
  "path|neutral-space|down:out|1h|linear:contra": "worst point 0 cm off, palm 0.2°, fingers 0.5°",
  "path|neutral-space|down:out|1h|linear:down": "worst point 0 cm off, palm 0.6°, fingers 0.6°",
  "path|neutral-space|down:out|1h|linear:ipsi": "worst point 0 cm off, palm 0.6°, fingers 1°",
  "path|neutral-space|down:out|1h|linear:out": "worst point 0.01 cm off, palm 0.5°, fingers 0.7°",
  "path|neutral-space|down:out|1h|linear:out+ipsi": "worst point 0 cm off, palm 0.2°, fingers 0.8°",
  "path|neutral-space|down:out|1h|linear:up": "worst point 0 cm off, palm 0.8°, fingers 0.6°",
  "path|neutral-space|down:out|1h|nod": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|neutral-space|down:out|2h|linear:down": "worst point 0 cm off, palm 0.5°, fingers 0.6°",
  "path|neutral-space|down:out|2h|linear:ipsi": "worst point 0 cm off, palm 0.5°, fingers 1°",
  "path|neutral-space|down:out|2h|linear:out": "worst point 0.01 cm off, palm 0.4°, fingers 0.5°",
  "path|neutral-space|down:out|2h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|neutral-space|down:out|2h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|neutral-space|in:contra+contra3|2h|linear:up": "worst point 0 cm off, palm 0.7°, fingers 0.3°",
  "path|neutral-space|in:contra+contra4|2h|linear:ipsi": "worst point 0.01 cm off, palm 0.5°, fingers 1°",
  "path|neutral-space|in:contra+contra4|2h|linear:up": "worst point 0 cm off, palm 0.7°, fingers 0.3°",
  "path|neutral-space|in:contra+contra8|2h|linear:ipsi": "worst point 0.01 cm off, palm 0.4°, fingers 0.8°",
  "path|neutral-space|in:down+contra4|2h|linear:up": "worst point 0 cm off, palm 0.4°, fingers 0.6°",
  "path|neutral-space|in:up+up6|1h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|neutral-space|in:up|2h|linear:up": "worst point 0 cm off, palm 0.5°, fingers 0.5°",
  "path|neutral-space|in:up|2h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|neutral-space|out:up+contra4|2h|linear:out+ipsi": "worst point 0.01 cm off, palm 0.9°, fingers 0.7°",
  "path|neutral-space|out:up+contra5+down3+in2|1h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|neutral-space|out:up+contra6|2h|linear:ipsi": "worst point 0 cm off, palm 0.5°, fingers 0.1°",
  "path|neutral-space|out:up+contra6|2h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|neutral-space|out:up+contra7|2h|linear:ipsi": "worst point 0 cm off, palm 0.5°, fingers 0°",
  "path|neutral-space|out:up+ipsi8|1h|linear:out": "worst point 0.52 cm off, palm 14.8°, fingers 15.3°",
  "path|neutral-space|out:up+up4|1h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|neutral-space|out:up+up8|1h|linear:contra": "worst point 0 cm off, palm 0.4°, fingers 0°",
  "path|neutral-space|out:up|1h|linear:out": "worst point 0.57 cm off, palm 16.1°, fingers 16.4°",
  "path|neutral-space|out:up|1h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|neutral-space|up:out|2h|linear:down": "worst point 0 cm off, palm 0.5°, fingers 0.5°",
  "path|neutral-space|up:out|2h|linear:ipsi": "worst point 0 cm off, palm 0.2°, fingers 0.6°",
  "path|neutral-space|up:out|2h|linear:out": "worst point 0.01 cm off, palm 0.7°, fingers 0.7°",
  "path|neutral-space|up:out|2h|linear:up": "worst point 0 cm off, palm 0.4°, fingers 0.5°",
  "path|nose|contra:up+out4|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|nose|contra:up|1h|linear:out+down": "worst point 0 cm off, palm 0.4°, fingers 0.9°",
  "path|nose|contra:up|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|nose|down:contra+down3|1h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|nose|in:up+down3|1h|linear:up": "worst point 0 cm off, palm 0.5°, fingers 0.8°",
  "path|nose|in:up+out4|1h|linear:out": "worst point 0 cm off, palm 0.4°, fingers 0.4°",
  "path|nose|in:up+out6|2h|linear:down": "worst point 0.01 cm off, palm 0.5°, fingers 2.2°",
  "path|shoulder|contra:up|2h|linear:down+contra": "worst point 0.14 cm off, palm 8.3°, fingers 9.1°",
  "path|shoulder|down:in|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|shoulder|down:in|2h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|shoulder|out:up+up4|2h|linear:up": "worst point 0.05 cm off, palm 5.4°, fingers 1.6°",
  "path|weak-hand|contra:out+down10|1h|linear:down": "worst point 0.02 cm off, palm 0.5°, fingers 1.7°",
  "path|weak-hand|contra:out+down1|1h|linear:down": "worst point 0 cm off, palm 0.4°, fingers 0.8°",
  "path|weak-hand|contra:out+down1|1h|linear:out": "worst point 0.01 cm off, palm 0.2°, fingers 0.5°",
  "path|weak-hand|contra:out+down1|1h|linear:up": "worst point 0 cm off, palm 0.4°, fingers 0.7°",
  "path|weak-hand|contra:out+down1|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|weak-hand|contra:out+down2|1h|linear:down": "worst point 0 cm off, palm 0.5°, fingers 0.8°",
  "path|weak-hand|contra:out+down2|1h|linear:out": "worst point 0 cm off, palm 0.4°, fingers 0.5°",
  "path|weak-hand|contra:out+down2|1h|linear:up": "worst point 0 cm off, palm 0.4°, fingers 0.8°",
  "path|weak-hand|contra:out+down3|1h|linear:down+ipsi": "worst point 0.01 cm off, palm 0.8°, fingers 0.4°",
  "path|weak-hand|contra:out+down3|1h|linear:out": "worst point 0.01 cm off, palm 0.2°, fingers 0.6°",
  "path|weak-hand|contra:out+down3|1h|linear:out+up": "worst point 0 cm off, palm 0.1°, fingers 0.2°",
  "path|weak-hand|contra:out+down3|1h|linear:up": "worst point 0 cm off, palm 0.3°, fingers 0.7°",
  "path|weak-hand|contra:out+down3|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.3°",
  "path|weak-hand|contra:out+down5+ipsi3|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|weak-hand|contra:out+down6|1h|linear:up": "worst point 0 cm off, palm 0.3°, fingers 0.7°",
  "path|weak-hand|contra:out+down8|1h|linear:down": "worst point 0.01 cm off, palm 0.9°, fingers 1.3°",
  "path|weak-hand|contra:out+in10|1h|linear:out": "worst point 0 cm off, palm 0.4°, fingers 0.3°",
  "path|weak-hand|contra:out+in4+down2|1h|linear:down": "worst point 0 cm off, palm 0.8°, fingers 0.7°",
  "path|weak-hand|contra:out+in4+down2|1h|linear:out": "worst point 0 cm off, palm 0.3°, fingers 0.4°",
  "path|weak-hand|contra:out+in4+down5|1h|linear:out": "worst point 0 cm off, palm 0.3°, fingers 0.4°",
  "path|weak-hand|contra:out+up3|1h|linear:up": "worst point 0 cm off, palm 0.4°, fingers 0.7°",
  "path|weak-hand|contra:out+up4|1h|linear:down": "worst point 0.01 cm off, palm 0.9°, fingers 0.6°",
  "path|weak-hand|contra:out|1h|linear:down": "worst point 0 cm off, palm 0.6°, fingers 1.2°",
  "path|weak-hand|contra:out|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.5°",
  "path|weak-hand|contra:out|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|weak-hand|contra:up+down3|1h|twist": "worst point 0 cm off, palm 0°, fingers 0.2°",
  "path|weak-hand|contra:up|1h|linear:down": "worst point 0.01 cm off, palm 1.3°, fingers 2.4°",
  "path|weak-hand|contra:up|1h|linear:ipsi": "worst point 0 cm off, palm 0.5°, fingers 0.6°",
  "path|weak-hand|contra:up|1h|linear:out": "worst point 0.09 cm off, palm 4°, fingers 16.4°",
  "path|weak-hand|contra:up|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.7°",
  "path|weak-hand|down:contra+down1|1h|linear:contra": "worst point 0.01 cm off, palm 0.2°, fingers 0.1°",
  "path|weak-hand|down:contra+down2|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|weak-hand|down:contra+down3|1h|linear:down+contra": "worst point 0.01 cm off, palm 3.8°, fingers 1.9°",
  "path|weak-hand|down:contra+down3|1h|linear:down+ipsi": "worst point 0.01 cm off, palm 2.8°, fingers 1.2°",
  "path|weak-hand|down:contra+down3|1h|linear:up": "worst point 0.01 cm off, palm 2.7°, fingers 1.3°",
  "path|weak-hand|down:contra+down3|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|weak-hand|down:contra+up4|1h|linear:out": "worst point 0.03 cm off, palm 1.5°, fingers 2.4°",
  "path|weak-hand|down:contra+up6|1h|tap": "worst point 0 cm off, palm 0.4°, fingers 0.3°",
  "path|weak-hand|down:contra|1h|linear:down": "worst point 0.01 cm off, palm 3.5°, fingers 1.3°",
  "path|weak-hand|down:contra|1h|linear:out": "worst point 0.03 cm off, palm 1°, fingers 2.8°",
  "path|weak-hand|down:contra|1h|tap": "worst point 0 cm off, palm 0.5°, fingers 0.3°",
  "path|weak-hand|down:out+contra+down2|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|weak-hand|down:out+contra+down3|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|weak-hand|down:out+contra+down4|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.3°",
  "path|weak-hand|down:out+contra|1h|linear:down": "worst point 0 cm off, palm 0.9°, fingers 0.8°",
  "path|weak-hand|down:out+contra|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.3°",
  "path|weak-hand|down:out+down1|1h|linear:down": "worst point 0 cm off, palm 0.8°, fingers 0.5°",
  "path|weak-hand|down:out+down1|1h|linear:up": "worst point 0.01 cm off, palm 2.8°, fingers 1.2°",
  "path|weak-hand|down:out+down1|1h|tap": "worst point 0.01 cm off, palm 2.4°, fingers 0.8°",
  "path|weak-hand|down:out+down2|1h|linear:out": "worst point 0.01 cm off, palm 0.5°, fingers 0.7°",
  "path|weak-hand|down:out+down2|1h|linear:up": "worst point 0.01 cm off, palm 2.9°, fingers 1.2°",
  "path|weak-hand|down:out+down2|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|weak-hand|down:out+down3|1h|arc:up": "worst point 0.01 cm off, palm 2.4°, fingers 1°",
  "path|weak-hand|down:out+down3|1h|linear:out": "worst point 0 cm off, palm 0.7°, fingers 0.7°",
  "path|weak-hand|down:out+down3|1h|linear:up": "worst point 0.01 cm off, palm 3.5°, fingers 1.5°",
  "path|weak-hand|down:out+down3|1h|tap": "worst point 0.01 cm off, palm 2.9°, fingers 1.1°",
  "path|weak-hand|down:out+down3|1h|twist": "worst point 0 cm off, palm 0.2°, fingers 0°",
  "path|weak-hand|down:out+in6+down4|1h|linear:out": "worst point 0 cm off, palm 0.6°, fingers 0.6°",
  "path|weak-hand|down:out+in8+up4|1h|arc:out": "worst point 0.01 cm off, palm 3.3°, fingers 0.8°",
  "path|weak-hand|down:out+up3|1h|linear:up": "worst point 0.02 cm off, palm 4.9°, fingers 3°",
  "path|weak-hand|down:out+up5|1h|linear:up": "worst point 0.02 cm off, palm 4.2°, fingers 3.1°",
  "path|weak-hand|down:out|1h|linear:down": "worst point 0 cm off, palm 1°, fingers 0.6°",
  "path|weak-hand|down:out|1h|tap": "worst point 0 cm off, palm 0.4°, fingers 0.2°",
  "path|weak-hand|in:contra+down1|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|weak-hand|in:contra+down3|1h|linear:contra": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|weak-hand|in:contra+down4|1h|linear:ipsi": "worst point 0 cm off, palm 0.3°, fingers 0.6°",
  "path|weak-hand|in:contra+down7|1h|linear:up": "worst point 0 cm off, palm 0.7°, fingers 0.4°",
  "path|weak-hand|in:contra+in3+down5|1h|linear:in": "worst point 0 cm off, palm 0.5°, fingers 0.3°",
  "path|weak-hand|in:contra+in3+down5|1h|linear:up": "worst point 0 cm off, palm 0.7°, fingers 0.5°",
  "path|weak-hand|in:contra|1h|linear:down": "worst point 0.01 cm off, palm 0.9°, fingers 1.2°",
  "path|weak-hand|in:contra|1h|linear:out": "worst point 0.01 cm off, palm 1.1°, fingers 1.1°",
  "path|weak-hand|in:contra|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|weak-hand|in:down+down4|1h|linear:up": "worst point 0.02 cm off, palm 1.4°, fingers 3.9°",
  "path|weak-hand|in:down+down9|1h|linear:up": "worst point 0.01 cm off, palm 0.9°, fingers 2.8°",
  "path|weak-hand|in:down+up4|1h|linear:out": "worst point 0.13 cm off, palm 3.9°, fingers 6.9°",
  "path|weak-hand|in:up+down4|1h|tap": "worst point 0.01 cm off, palm 1°, fingers 1.4°",
  "path|weak-hand|in:up+out3+down4|1h|tap": "worst point 0.01 cm off, palm 0.9°, fingers 1.3°",
  "path|weak-hand|ipsi:out|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|weak-hand|out:up+down1|1h|linear:ipsi": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|weak-hand|up:contra+down14|1h|tap": "worst point 0 cm off, palm 0.5°, fingers 0.2°",
  "path|weak-hand|up:out+contra+down3|1h|arc:contra": "worst point 0.16 cm off, palm 0.6°, fingers 7.8°",
  "path|weak-hand|up:out+down3|1h|arc:out": "worst point 0.01 cm off, palm 0.4°, fingers 0.4°",
  "path|weak-hand|up:out+down3|1h|linear:out": "worst point 0.01 cm off, palm 0.4°, fingers 0.4°",
  "path|weak-hand|up:out+down3|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.2°",
  "path|weak-hand|up:out+down9|1h|linear:out": "worst point 0.05 cm off, palm 0.8°, fingers 1.8°",
  "path|weak-hand|up:out+down9|1h|linear:up": "worst point 0.73 cm off, palm 5.4°, fingers 18°",
  "site|belly|in:contra|A|thumb|1h": "point 0 cm off, palm 0.3°, fingers 0.6°",
  "site|cheek|contra:out|L|thumb|1h": "point 0.12 cm off, palm 7.1°, fingers 15.4°",
  "site|cheek|contra:up|A|thumb|1h": "point 0.01 cm off, palm 0.4°, fingers 1.2°",
  "site|cheek|contra:up|F|index|1h": "point 0.02 cm off, palm 1.2°, fingers 3.7°",
  "site|cheek|down:contra|X|index|1h": "point 0.5 cm off, palm 44°, fingers 36.9°",
  "site|cheek|in:contra|Y|thumb|1h": "point 0 cm off, palm 0.8°, fingers 1.2°",
  "site|cheek|in:up|flat_o|fingertips|1h": "point 0 cm off, palm 0.3°, fingers 0.7°",
  "site|cheek|in:up|open_b|palm|1h": "point 0.09 cm off, palm 0.7°, fingers 2°",
  "site|chest-front|contra:out|A|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|chest-front|down:out+out6|open_b|fingertips|1h": "point 0.1 cm off, palm 3.6°, fingers 3.4°",
  "site|chest|contra:up|5|thumb|1h": "point 0.03 cm off, palm 2.5°, fingers 4.8°",
  "site|chest|contra:up|curved_5|thumb|1h": "point 0.03 cm off, palm 2.5°, fingers 4.8°",
  "site|chest|in:contra+contra10|open_b|palm|2h": "point 0.01 cm off, palm 1.3°, fingers 0.8°",
  "site|chest|in:contra+ipsi4|C|fingertips|2h": "point 0 cm off, palm 0.2°, fingers 0.3°",
  "site|chest|in:contra+up4|5|palm|2h": "point 0.01 cm off, palm 0.9°, fingers 0.7°",
  "site|chest|in:contra|A|palm|1h": "point 0.01 cm off, palm 0.6°, fingers 0.6°",
  "site|chest|in:contra|A|thumb|1h": "point 0.01 cm off, palm 0.6°, fingers 0.6°",
  "site|chest|in:contra|C|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.4°",
  "site|chest|in:contra|C|fingertips|2h": "point 0 cm off, palm 0.1°, fingers 0.3°",
  "site|chest|in:contra|curved_5|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.4°",
  "site|chest|in:contra|open_8|fingertips|1h": "point 0 cm off, palm 0.3°, fingers 0.3°",
  "site|chest|in:contra|open_b|palm|1h": "point 0.01 cm off, palm 0.6°, fingers 0.6°",
  "site|chest|in:contra|open_b|palm|2h": "point 0.01 cm off, palm 0.6°, fingers 0.6°",
  "site|chest|in:up+contra13+up5|L|palm|1h": "point 0.01 cm off, palm 2.5°, fingers 2.8°",
  "site|chest|in:up+contra6|C|fingertips|1h": "point 0.01 cm off, palm 0.3°, fingers 1.4°",
  "site|chest|in:up|bent_b|fingertips|2h": "point 0.01 cm off, palm 0.5°, fingers 0.7°",
  "site|chest|in:up|open_8|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.3°",
  "site|chest|in:up|open_8|fingertips|2h": "point 0 cm off, palm 0.2°, fingers 0.3°",
  "site|chest|in:up|open_b|palm|1h": "point 0.01 cm off, palm 0.8°, fingers 1.3°",
  "site|chest|up:in|C|fingertips|2h": "point 0.02 cm off, palm 2.1°, fingers 1.3°",
  "site|chin|contra:up|1|index|1h": "point 0 cm off, palm 0.5°, fingers 0.8°",
  "site|chin|contra:up|4|index|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|chin|contra:up|5|thumb|1h": "point 0.01 cm off, palm 0.9°, fingers 1°",
  "site|chin|contra:up|A|thumb|1h": "point 0.01 cm off, palm 0.7°, fingers 1.2°",
  "site|chin|contra:up|C|thumb|1h": "point 0.02 cm off, palm 1.2°, fingers 2.6°",
  "site|chin|contra:up|F|index|1h": "point 0.02 cm off, palm 1.2°, fingers 2.7°",
  "site|chin|contra:up|L|thumb|1h": "point 0.01 cm off, palm 1°, fingers 1°",
  "site|chin|in:contra|H|fingertips|1h": "point 0.04 cm off, palm 7.6°, fingers 4.3°",
  "site|chin|in:contra|Y|fingertips|1h": "point 0.02 cm off, palm 4.5°, fingers 2.8°",
  "site|chin|in:up+contra2|R|fingertips|1h": "point 0 cm off, palm 0.4°, fingers 0.5°",
  "site|chin|in:up+contra|open_b|fingertips|1h": "point 0.05 cm off, palm 5.2°, fingers 5.6°",
  "site|chin|in:up+ipsi2|R|fingertips|1h": "point 0.01 cm off, palm 0.5°, fingers 0.7°",
  "site|chin|in:up|1|index|1h": "point 0 cm off, palm 0.3°, fingers 0.6°",
  "site|chin|in:up|open_8|fingertips|1h": "point 0 cm off, palm 0.1°, fingers 0.3°",
  "site|chin|in:up|open_b|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|ear|contra:up|A|thumb|1h": "point 2.54 cm off, palm 9.1°, fingers 12°",
  "site|eye|in:up+down2|V|index|1h": "point 0 cm off, palm 0.4°, fingers 1°",
  "site|forearm|contra:out+down3|open_b|pinky-side|1h": "point 0.01 cm off, palm 0.4°, fingers 1.1°",
  "site|forearm|down:contra+down3|1|index|1h": "point 0.02 cm off, palm 2.3°, fingers 3.7°",
  "site|forearm|down:contra+down3|open_b|palm|1h": "point 0 cm off, palm 0.3°, fingers 0.2°",
  "site|forehead|contra:out|L|thumb|1h": "point 0.02 cm off, palm 3.3°, fingers 3.2°",
  "site|forehead|contra:up+out+ipsi4+out4|1|index|1h": "point 0.01 cm off, palm 0.1°, fingers 0.7°",
  "site|forehead|contra:up|5|thumb|1h": "point 0 cm off, palm 0.8°, fingers 1°",
  "site|forehead|contra:up|A|thumb|1h": "point 0 cm off, palm 0.3°, fingers 0.2°",
  "site|forehead|down:contra|1|index|1h": "point 0.17 cm off, palm 16.4°, fingers 18.9°",
  "site|forehead|in:up+contra|open_8|fingertips|1h": "point 0 cm off, palm 0.4°, fingers 0.4°",
  "site|forehead|in:up+ipsi4+out4|1|index|1h": "point 0 cm off, palm 0.1°, fingers 0.2°",
  "site|forehead|in:up|1|index|1h": "point 0 cm off, palm 0.1°, fingers 0.4°",
  "site|forehead|in:up|open_8|fingertips|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|head|contra:up+ipsi4|F|index|1h": "point 0 cm off, palm 0.3°, fingers 0.9°",
  "site|head|in:up+contra|B|fingertips|1h": "point 0.01 cm off, palm 1.8°, fingers 2.9°",
  "site|head|in:up+contra|flat_o|fingertips|1h": "point 0 cm off, palm 0.4°, fingers 0.3°",
  "site|head|in:up+contra|open_b|fingertips|1h": "point 0 cm off, palm 0.3°, fingers 0.5°",
  "site|mouth|contra:out+up|C|thumb|1h": "point 0.06 cm off, palm 2.7°, fingers 4.5°",
  "site|mouth|contra:out|C|thumb|1h": "point 0.13 cm off, palm 11.1°, fingers 10°",
  "site|mouth|contra:up|1|index|1h": "point 0 cm off, palm 0.3°, fingers 0.2°",
  "site|mouth|contra:up|A|thumb|1h": "point 0 cm off, palm 0.4°, fingers 0.9°",
  "site|mouth|in:up|1|index|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|mouth|in:up|flat_o|fingertips|1h": "point 0 cm off, palm 0.4°, fingers 0.5°",
  "site|mouth|in:up|open_8|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.3°",
  "site|neck|contra:up|F|index|1h": "point 0.15 cm off, palm 13.9°, fingers 18.4°",
  "site|neutral-space-high|in:up|Y|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|neutral-space-high|out:up|open_b|fingertips|1h": "point 0 cm off, palm 0.6°, fingers 0.6°",
  "site|neutral-space|down:out+up10+out6|5|fingertips|1h": "point 0.01 cm off, palm 2°, fingers 1.9°",
  "site|neutral-space|down:out+up8|1|index|1h": "point 0.01 cm off, palm 1.5°, fingers 1.5°",
  "site|nose|contra:up|1|index|1h": "point 0 cm off, palm 0.4°, fingers 0.3°",
  "site|nose|contra:up|3|thumb|1h": "point 0 cm off, palm 0.5°, fingers 0.4°",
  "site|nose|down:out+out6+down4|1|index|1h": "point 0.22 cm off, palm 16.3°, fingers 16.4°",
  "site|nose|in:up|H|fingertips|1h": "point 0 cm off, palm 0.3°, fingers 0.6°",
  "site|nose|in:up|flat_o|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.5°",
  "site|shoulder|contra:up|A|thumb|2h": "point 0.02 cm off, palm 3.1°, fingers 2.6°",
  "site|shoulder|down:in+out8|1|index|1h": "point 0 cm off, palm 0°, fingers 0°",
  "site|shoulder|down:in|curved_5|fingertips|1h": "point 0 cm off, palm 0.3°, fingers 0.4°",
  "site|shoulder|down:in|flat_b|fingertips|2h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|weak-hand|contra:out+down1|1|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|contra:out+down1|A|thumb|1h": "point 0.01 cm off, palm 1.3°, fingers 1.1°",
  "site|weak-hand|contra:out+down1|S|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|contra:out+down1|open_b|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|contra:out+down2|X|index|1h": "point 0.01 cm off, palm 1.7°, fingers 1.9°",
  "site|weak-hand|contra:out+down2|open_b|pinky-side|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|weak-hand|contra:out+down3|1|index|1h": "point 0.01 cm off, palm 2°, fingers 3.1°",
  "site|weak-hand|contra:out+down3|1|pinky-side|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|weak-hand|contra:out+down3|A|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.2°",
  "site|weak-hand|contra:out+down3|C|pinky-side|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|weak-hand|contra:out+down3|H|pinky-side|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|weak-hand|contra:out+down3|open_b|pinky-side|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|weak-hand|contra:out+down5+ipsi3|A|thumb|1h": "point 0.01 cm off, palm 1.1°, fingers 0.8°",
  "site|weak-hand|contra:out+down6|A|pinky-side|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|weak-hand|contra:out+down8|8|fingertips|1h": "point 0 cm off, palm 1.2°, fingers 1.2°",
  "site|weak-hand|contra:out+in4+down2|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|weak-hand|contra:out|A|thumb|1h": "point 0.01 cm off, palm 1.4°, fingers 1.1°",
  "site|weak-hand|contra:out|G|index|1h": "point 0.02 cm off, palm 3.4°, fingers 4.5°",
  "site|weak-hand|contra:out|K|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|contra:out|S|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.2°",
  "site|weak-hand|contra:out|open_b|fingertips|1h": "point 0.02 cm off, palm 1.4°, fingers 2.4°",
  "site|weak-hand|contra:up+down3|1|palm|1h": "point 0.01 cm off, palm 1.2°, fingers 2.2°",
  "site|weak-hand|contra:up|4|fingertips|1h": "point 0.03 cm off, palm 3.3°, fingers 7.4°",
  "site|weak-hand|contra:up|5|palm|1h": "point 0.01 cm off, palm 0.8°, fingers 1.6°",
  "site|weak-hand|contra:up|C|fingertips|1h": "point 0.01 cm off, palm 2.4°, fingers 3.8°",
  "site|weak-hand|contra:up|L|palm|1h": "point 0.01 cm off, palm 0.8°, fingers 1.6°",
  "site|weak-hand|down:contra+down1|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.5°",
  "site|weak-hand|down:contra+down3|1|index|1h": "point 0.02 cm off, palm 1.7°, fingers 1.8°",
  "site|weak-hand|down:contra+down3|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|weak-hand|down:contra+up6|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.5°",
  "site|weak-hand|down:contra|1|index|1h": "point 0.01 cm off, palm 1.4°, fingers 1.9°",
  "site|weak-hand|down:contra|bent_b|fingertips|1h": "point 0.01 cm off, palm 1.3°, fingers 1.1°",
  "site|weak-hand|down:contra|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|weak-hand|down:out+contra+down2|H|pinky-side|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|weak-hand|down:out+contra+down3|1|index|1h": "point 0.01 cm off, palm 1.9°, fingers 1.4°",
  "site|weak-hand|down:out+contra+down4|1|index|1h": "point 0.01 cm off, palm 1.9°, fingers 1.4°",
  "site|weak-hand|down:out+contra|1|index|1h": "point 0.01 cm off, palm 2°, fingers 1.2°",
  "site|weak-hand|down:out+down1|A|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out+down1|open_8|fingertips|1h": "point 0.01 cm off, palm 1.3°, fingers 1.2°",
  "site|weak-hand|down:out+down1|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out+down2|5|fingertips|1h": "point 0.01 cm off, palm 1.7°, fingers 0.6°",
  "site|weak-hand|down:out+down2|A|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out+down2|C|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out+down2|C|thumb|1h": "point 0.04 cm off, palm 3.5°, fingers 0.7°",
  "site|weak-hand|down:out+down2|H|fingertips|1h": "point 0.01 cm off, palm 1.1°, fingers 0.9°",
  "site|weak-hand|down:out+down2|K|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|down:out+down2|L|thumb|1h": "point 0.02 cm off, palm 4.1°, fingers 1.9°",
  "site|weak-hand|down:out+down2|flat_b|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|down:out+down2|flat_o|fingertips|1h": "point 0.01 cm off, palm 3°, fingers 1.3°",
  "site|weak-hand|down:out+down2|open_8|fingertips|1h": "point 0.01 cm off, palm 1.4°, fingers 1.2°",
  "site|weak-hand|down:out+down2|open_b|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|down:out+down3|1|index|1h": "point 0.03 cm off, palm 2.9°, fingers 4.2°",
  "site|weak-hand|down:out+down3|5|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out+down3|A|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out+down3|C|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out+down3|H|fingertips|1h": "point 0.01 cm off, palm 1.1°, fingers 0.9°",
  "site|weak-hand|down:out+down3|R|fingertips|1h": "point 0 cm off, palm 1°, fingers 0.8°",
  "site|weak-hand|down:out+down3|S|pinky-side|1h": "point 0 cm off, palm 0°, fingers 0.1°",
  "site|weak-hand|down:out+down3|U|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out+down3|baby_o|index|1h": "point 0.07 cm off, palm 1.5°, fingers 6.3°",
  "site|weak-hand|down:out+down3|bent_b|fingertips|1h": "point 0.01 cm off, palm 2.1°, fingers 1°",
  "site|weak-hand|down:out+down3|open_b|fingertips|1h": "point 0.01 cm off, palm 1.6°, fingers 1.2°",
  "site|weak-hand|down:out+down3|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|down:out|P|fingertips|1h": "point 0.01 cm off, palm 1.1°, fingers 0.8°",
  "site|weak-hand|down:out|S|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|down:out|X|index|1h": "point 0.08 cm off, palm 5.4°, fingers 8.9°",
  "site|weak-hand|down:out|open_b|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|in:contra+down1|open_b|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|in:contra+down3|H|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0°",
  "site|weak-hand|in:contra+down4|1|index|1h": "point 0 cm off, palm 0.4°, fingers 0.6°",
  "site|weak-hand|in:contra+down6|A|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.2°",
  "site|weak-hand|in:contra+down7|open_b|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0°",
  "site|weak-hand|in:contra|1|index|1h": "point 0 cm off, palm 0.4°, fingers 0.5°",
  "site|weak-hand|in:contra|4|fingertips|1h": "point 0 cm off, palm 0.4°, fingers 0.4°",
  "site|weak-hand|in:contra|C|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|in:contra|X|index|1h": "point 0 cm off, palm 0.7°, fingers 0.8°",
  "site|weak-hand|in:down+down2|bent_b|fingertips|1h": "point 0.14 cm off, palm 11°, fingers 10.2°",
  "site|weak-hand|in:down+down4|V|fingertips|1h": "point 0.02 cm off, palm 1.5°, fingers 6.6°",
  "site|weak-hand|in:down+down9|flat_o|fingertips|1h": "point 0.16 cm off, palm 14.2°, fingers 11.1°",
  "site|weak-hand|in:up+down3|flat_o|fingertips|1h": "point 0.35 cm off, palm 29.2°, fingers 22.4°",
  "site|weak-hand|in:up+down3|open_b|palm|1h": "point 0.01 cm off, palm 0.5°, fingers 0.8°",
  "site|weak-hand|in:up+down4|1|index|1h": "point 0.17 cm off, palm 14.1°, fingers 21°",
  "site|weak-hand|in:up+out3+down4|V|fingertips|1h": "point 0.25 cm off, palm 17.3°, fingers 25.9°",
  "site|weak-hand|ipsi:out|A|thumb|1h": "point 0 cm off, palm 0.4°, fingers 0.3°",
  "site|weak-hand|out:up+down1|B|pinky-side|1h": "point 0 cm off, palm 0.4°, fingers 0.7°",
  "site|weak-hand|out:up+down1|U|palm|1h": "point 0 cm off, palm 0.3°, fingers 0.5°",
  "site|weak-hand|up:contra+down3|open_b|fingertips|1h": "point 0 cm off, palm 0.6°, fingers 1.3°",
  "site|weak-hand|up:out+contra+down3|open_b|back|1h": "point 0.05 cm off, palm 0.4°, fingers 2.4°",
  "site|weak-hand|up:out+down2|K|back|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|up:out+down2|open_b|back|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|up:out+down3|flat_o|back|1h": "point 0 cm off, palm 0.3°, fingers 0.1°",
  "site|weak-hand|up:out+down3|open_b|back|1h": "point 0 cm off, palm 0.3°, fingers 0.1°",
  "site|weak-hand|up:out+down9|bent_b|back|1h": "point 0 cm off, palm 0.1°, fingers 0°",
  "turn|base-hand|contra:out|1h": "point 0.01 cm off, palm 1°, fingers 2.8°",
  "turn|base-hand|contra:up|1h": "point 0.13 cm off, palm 30.1°, fingers 26.3°",
  "turn|base-hand|down:contra|1h": "point 0.11 cm off, palm 23.2°, fingers 28.6°",
  "turn|base-hand|down:out+contra|1h": "point 0.05 cm off, palm 19.3°, fingers 7.4°",
  "turn|base-hand|down:out|1h": "point 0.06 cm off, palm 19.7°, fingers 5.4°",
  "turn|base-hand|in:contra|1h": "point 0.04 cm off, palm 6.2°, fingers 5.8°",
  "turn|base-hand|in:up|1h": "point 0.08 cm off, palm 12°, fingers 12°",
  "turn|base-hand|out:up|1h": "point 0.09 cm off, palm 27.3°, fingers 3.1°",
  "turn|base-hand|up:contra|1h": "point 0.01 cm off, palm 4°, fingers 1.5°",
  "turn|base-hand|up:out|1h": "point 0.01 cm off, palm 0.9°, fingers 1.4°",
  "turn|belly|in:contra|1h": "point 0.01 cm off, palm 0.7°, fingers 0.6°",
  "turn|belly|in:contra|2h": "point 0.01 cm off, palm 0.7°, fingers 3.9°",
  "turn|belly|in:down+ipsi12|1h": "point 0.01 cm off, palm 1.3°, fingers 5.1°",
  "turn|cheek|contra:in+up+up2+ipsi2|1h": "point 0.01 cm off, palm 1.6°, fingers 1.7°",
  "turn|cheek|contra:out|1h": "point 0.23 cm off, palm 22.2°, fingers 57.2°",
  "turn|cheek|contra:up+ipsi4+out2|1h": "point 0.04 cm off, palm 1.7°, fingers 5.3°",
  "turn|cheek|contra:up+ipsi4|1h": "point 0.05 cm off, palm 1.8°, fingers 9.4°",
  "turn|cheek|contra:up|1h": "point 0.03 cm off, palm 2.7°, fingers 6.7°",
  "turn|cheek|down:contra|1h": "point 0.16 cm off, palm 17.3°, fingers 21.3°",
  "turn|cheek|in:contra|1h": "point 0.09 cm off, palm 12.4°, fingers 34°",
  "turn|cheek|in:up+ipsi4+up3|1h": "point 0.04 cm off, palm 4.1°, fingers 7.7°",
  "turn|cheek|in:up+ipsi6+out4|1h": "point 0.02 cm off, palm 2.9°, fingers 3.4°",
  "turn|cheek|in:up+out6|1h": "point 0.01 cm off, palm 2.1°, fingers 1.5°",
  "turn|cheek|in:up|1h": "point 0.02 cm off, palm 2.1°, fingers 4.3°",
  "turn|cheek|out:up+out6|1h": "point 0.06 cm off, palm 13.6°, fingers 10.6°",
  "turn|chest-front|contra:out+ipsi4|2h": "point 0.01 cm off, palm 2.4°, fingers 3.1°",
  "turn|chest-front|contra:out|1h": "point 0.03 cm off, palm 4.4°, fingers 5.5°",
  "turn|chest-front|contra:out|2h": "point 0.03 cm off, palm 3.9°, fingers 4.9°",
  "turn|chest-front|contra:up|1h": "point 0.05 cm off, palm 10.4°, fingers 8.8°",
  "turn|chest-front|down:out+ipsi4|2h": "point 0.11 cm off, palm 7.8°, fingers 28.1°",
  "turn|chest-front|down:out+ipsi6|2h": "point 0.09 cm off, palm 8.4°, fingers 23.8°",
  "turn|chest-front|down:out+out12|2h": "point 0.05 cm off, palm 28°, fingers 5.9°",
  "turn|chest-front|down:out+out6|1h": "point 0.04 cm off, palm 18.5°, fingers 7.3°",
  "turn|chest-front|down:out|1h": "point 0.04 cm off, palm 22.6°, fingers 11.2°",
  "turn|chest-front|down:out|2h": "point 0.05 cm off, palm 29.4°, fingers 17.1°",
  "turn|chest-front|in:contra+in2|1h": "point 0.01 cm off, palm 0.6°, fingers 2.7°",
  "turn|chest-front|in:contra+in2|2h": "point 0.01 cm off, palm 1.1°, fingers 4.1°",
  "turn|chest-front|in:contra|2h": "point 0.01 cm off, palm 1.1°, fingers 4°",
  "turn|chest-front|in:up+contra+in5|1h": "point 0.07 cm off, palm 1.5°, fingers 1.5°",
  "turn|chest-front|in:up|1h": "point 0.01 cm off, palm 0.6°, fingers 3.1°",
  "turn|chest-front|up:out|1h": "point 0.03 cm off, palm 4.9°, fingers 5.2°",
  "turn|chest-front|up:out|2h": "point 0.06 cm off, palm 9.8°, fingers 9.1°",
  "turn|chest|contra:in|1h": "point 0.05 cm off, palm 3.8°, fingers 3.5°",
  "turn|chest|contra:up|1h": "point 0.15 cm off, palm 30.4°, fingers 12.4°",
  "turn|chest|down:in+contra+contra9|1h": "point 0.01 cm off, palm 2.4°, fingers 1.5°",
  "turn|chest|down:in+contra|1h": "point 0.02 cm off, palm 3.2°, fingers 2°",
  "turn|chest|in:contra+contra10|2h": "point 0.01 cm off, palm 1.1°, fingers 2.9°",
  "turn|chest|in:contra+contra12+up6+out3|1h": "point 0.01 cm off, palm 2°, fingers 3.3°",
  "turn|chest|in:contra+contra12+up6|1h": "point 0.01 cm off, palm 2.1°, fingers 3.7°",
  "turn|chest|in:contra+contra9+out3|1h": "point 0 cm off, palm 1°, fingers 2.9°",
  "turn|chest|in:contra+contra9|1h": "point 0.01 cm off, palm 1.8°, fingers 2.9°",
  "turn|chest|in:contra+ipsi4|2h": "point 0.01 cm off, palm 2.3°, fingers 3.8°",
  "turn|chest|in:contra+up4|2h": "point 0.01 cm off, palm 2.2°, fingers 4.4°",
  "turn|chest|in:contra|1h": "point 0.01 cm off, palm 1.8°, fingers 3.4°",
  "turn|chest|in:contra|2h": "point 0.01 cm off, palm 1.8°, fingers 3.4°",
  "turn|chest|in:up+contra13+up5|1h": "point 0.02 cm off, palm 1.5°, fingers 4.9°",
  "turn|chest|in:up+contra6|1h": "point 0.02 cm off, palm 1.9°, fingers 7.6°",
  "turn|chest|in:up|1h": "point 0.04 cm off, palm 3.7°, fingers 4°",
  "turn|chest|in:up|2h": "point 0.04 cm off, palm 3.7°, fingers 4°",
  "turn|chest|ipsi:up+contra9|1h": "point 0.04 cm off, palm 3.7°, fingers 3.5°",
  "turn|chest|up:in|2h": "point 0.24 cm off, palm 21.4°, fingers 23.5°",
  "turn|chin|contra:in+up|1h": "point 0.03 cm off, palm 6.1°, fingers 2.7°",
  "turn|chin|contra:up|1h": "point 0.04 cm off, palm 5.4°, fingers 4.1°",
  "turn|chin|down:contra+down3|1h": "point 0.01 cm off, palm 2.3°, fingers 3.6°",
  "turn|chin|down:contra+down4|1h": "point 0.01 cm off, palm 1.9°, fingers 4.1°",
  "turn|chin|down:contra|1h": "point 0.01 cm off, palm 2.3°, fingers 4.3°",
  "turn|chin|in:contra|1h": "point 0.08 cm off, palm 11.9°, fingers 25.1°",
  "turn|chin|in:up+contra2|1h": "point 0.01 cm off, palm 1.3°, fingers 1.5°",
  "turn|chin|in:up+contra|1h": "point 0.06 cm off, palm 6.6°, fingers 7.4°",
  "turn|chin|in:up+down3|1h": "point 0.02 cm off, palm 1.5°, fingers 1.6°",
  "turn|chin|in:up+ipsi2|1h": "point 0.01 cm off, palm 1.2°, fingers 1.3°",
  "turn|chin|in:up+out4|1h": "point 0.01 cm off, palm 0.3°, fingers 2.1°",
  "turn|chin|in:up|1h": "point 0.01 cm off, palm 0.8°, fingers 1.9°",
  "turn|ear|contra:up|1h": "point 0.11 cm off, palm 7.7°, fingers 18.4°",
  "turn|eye|contra:up+ipsi6|2h": "point 0.03 cm off, palm 4.3°, fingers 3°",
  "turn|eye|contra:up+out8+ipsi4|1h": "point 0.03 cm off, palm 4.4°, fingers 9.4°",
  "turn|eye|down:contra+ipsi4|1h": "point 0.31 cm off, palm 31.2°, fingers 33.3°",
  "turn|eye|down:out+out4|2h": "point 0.42 cm off, palm 43.1°, fingers 61.8°",
  "turn|eye|in:up+down2|1h": "point 0.03 cm off, palm 2°, fingers 5.1°",
  "turn|eye|in:up+out3|1h": "point 0.02 cm off, palm 1.5°, fingers 4.4°",
  "turn|eye|out:contra+ipsi2|2h": "point 0.14 cm off, palm 24.7°, fingers 43.2°",
  "turn|forearm|contra:out+down3|1h": "point 0.05 cm off, palm 6.3°, fingers 7.4°",
  "turn|forearm|down:contra+down3|1h": "point 0.01 cm off, palm 0.3°, fingers 2.5°",
  "turn|forehead|contra:out+out8+ipsi7+up2|2h": "point 0.15 cm off, palm 6.3°, fingers 36.3°",
  "turn|forehead|contra:out|1h": "point 0.18 cm off, palm 4.2°, fingers 41.1°",
  "turn|forehead|contra:up+out+ipsi4+out4|1h": "point 0.02 cm off, palm 2.4°, fingers 5.7°",
  "turn|forehead|contra:up+out+out4|1h": "point 0.02 cm off, palm 2.8°, fingers 5.3°",
  "turn|forehead|contra:up+up4+out2|1h": "point 0.01 cm off, palm 3°, fingers 3.7°",
  "turn|forehead|contra:up|1h": "point 0.02 cm off, palm 3.4°, fingers 3.8°",
  "turn|forehead|down:contra|1h": "point 0.16 cm off, palm 17°, fingers 19.8°",
  "turn|forehead|down:out+out10+up2|1h": "point 0.21 cm off, palm 22.4°, fingers 36.1°",
  "turn|forehead|down:out+out4|1h": "point 0.25 cm off, palm 21.6°, fingers 44.9°",
  "turn|forehead|in:up+contra|1h": "point 0.02 cm off, palm 4.5°, fingers 4.3°",
  "turn|forehead|in:up+ipsi4+out2|1h": "point 0 cm off, palm 0.8°, fingers 1.4°",
  "turn|forehead|in:up+ipsi4+out4|1h": "point 0 cm off, palm 0.8°, fingers 1.4°",
  "turn|forehead|in:up+ipsi4|1h": "point 0.01 cm off, palm 0.9°, fingers 1.4°",
  "turn|forehead|in:up+ipsi6+out6|2h": "point 0 cm off, palm 0.6°, fingers 1.1°",
  "turn|forehead|in:up|1h": "point 0.01 cm off, palm 1.4°, fingers 2.4°",
  "turn|forehead|in:up|2h": "point 0.01 cm off, palm 1.4°, fingers 2.4°",
  "turn|forehead|out:up+contra+ipsi5|1h": "point 0.05 cm off, palm 15.7°, fingers 3.9°",
  "turn|head|contra:up+ipsi4+out2|1h": "point 0 cm off, palm 1°, fingers 0.6°",
  "turn|head|contra:up+ipsi4|1h": "point 0.01 cm off, palm 1.1°, fingers 2.7°",
  "turn|head|in:up+contra|1h": "point 0.04 cm off, palm 7.5°, fingers 8.9°",
  "turn|head|out:up+ipsi8+out8|2h": "point 0.01 cm off, palm 4.6°, fingers 1.7°",
  "turn|mouth|contra:out+out5|2h": "point 0.2 cm off, palm 7.4°, fingers 34.2°",
  "turn|mouth|contra:out+up|1h": "point 0.13 cm off, palm 1.1°, fingers 16.3°",
  "turn|mouth|contra:out|1h": "point 0.26 cm off, palm 5°, fingers 48.8°",
  "turn|mouth|contra:up+contra4|2h": "point 0.04 cm off, palm 5.4°, fingers 3.8°",
  "turn|mouth|contra:up|1h": "point 0.03 cm off, palm 4.7°, fingers 3.3°",
  "turn|mouth|down:contra+out2|1h": "point 0.05 cm off, palm 6.2°, fingers 7.3°",
  "turn|mouth|down:contra+out3|1h": "point 0.04 cm off, palm 5.7°, fingers 6.5°",
  "turn|mouth|in:contra+ipsi3|2h": "point 0.08 cm off, palm 15.5°, fingers 22.1°",
  "turn|mouth|in:up+ipsi3|2h": "point 0.02 cm off, palm 1.8°, fingers 1.9°",
  "turn|mouth|in:up+out4|1h": "point 0.01 cm off, palm 0.9°, fingers 1.4°",
  "turn|mouth|in:up+up3|1h": "point 0.01 cm off, palm 1.1°, fingers 1.5°",
  "turn|mouth|in:up|1h": "point 0.01 cm off, palm 1.2°, fingers 1.7°",
  "turn|mouth|out:contra+out2|1h": "point 0.05 cm off, palm 7.7°, fingers 10.6°",
  "turn|neck|contra:up|1h": "point 0.2 cm off, palm 19.5°, fingers 29.3°",
  "turn|neck|down:in+out4|1h": "point 0.02 cm off, palm 1°, fingers 3.5°",
  "turn|neutral-space-high|contra:up+up8+ipsi6|1h": "point 0.58 cm off, palm 1.5°, fingers 14.3°",
  "turn|neutral-space-high|contra:up|1h": "point 0.01 cm off, palm 0.5°, fingers 2°",
  "turn|neutral-space-high|down:out+up8|1h": "point 0.78 cm off, palm 17.5°, fingers 17.7°",
  "turn|neutral-space-high|down:out|2h": "point 0.01 cm off, palm 2.6°, fingers 4.9°",
  "turn|neutral-space-high|in:up|1h": "point 0.01 cm off, palm 2.9°, fingers 1.5°",
  "turn|neutral-space-high|out:up+contra3|2h": "point 0.01 cm off, palm 3.4°, fingers 1.7°",
  "turn|neutral-space-high|out:up+ipsi4|2h": "point 0.01 cm off, palm 3.4°, fingers 2.7°",
  "turn|neutral-space-high|out:up+up8|2h": "point 0.54 cm off, palm 9.8°, fingers 8.8°",
  "turn|neutral-space-high|out:up|1h": "point 0.01 cm off, palm 3.4°, fingers 2.1°",
  "turn|neutral-space|contra+down:up+contra+contra4|2h": "point 0.04 cm off, palm 5.3°, fingers 11.8°",
  "turn|neutral-space|contra:out+contra2|2h": "point 0 cm off, palm 0.6°, fingers 1°",
  "turn|neutral-space|contra:out+contra6|2h": "point 0 cm off, palm 0.8°, fingers 1°",
  "turn|neutral-space|contra:out+contra7|2h": "point 0 cm off, palm 0.9°, fingers 1°",
  "turn|neutral-space|contra:out+contra8.5|2h": "point 0 cm off, palm 1°, fingers 1°",
  "turn|neutral-space|contra:out+out8|2h": "point 0 cm off, palm 0.6°, fingers 0.5°",
  "turn|neutral-space|contra:out|1h": "point 0 cm off, palm 0.5°, fingers 1°",
  "turn|neutral-space|contra:out|2h": "point 0 cm off, palm 0.5°, fingers 1°",
  "turn|neutral-space|contra:up+contra1+down10|2h": "point 0.22 cm off, palm 13.5°, fingers 31.9°",
  "turn|neutral-space|contra:up+contra2|2h": "point 0.06 cm off, palm 6.2°, fingers 15.7°",
  "turn|neutral-space|contra:up+contra5|2h": "point 0.06 cm off, palm 6.2°, fingers 17.7°",
  "turn|neutral-space|contra:up+contra6|2h": "point 0.07 cm off, palm 6°, fingers 18.3°",
  "turn|neutral-space|contra:up+contra7+up10|2h": "point 0.03 cm off, palm 3.9°, fingers 7.1°",
  "turn|neutral-space|contra:up+contra7|2h": "point 0.07 cm off, palm 5.4°, fingers 19°",
  "turn|neutral-space|contra:up|1h": "point 0.06 cm off, palm 3.9°, fingers 17.4°",
  "turn|neutral-space|down:contra+contra4|2h": "point 0.03 cm off, palm 6.7°, fingers 6°",
  "turn|neutral-space|down:contra+contra6|2h": "point 0.02 cm off, palm 5.8°, fingers 4.2°",
  "turn|neutral-space|down:in+contra6|2h": "point 0.2 cm off, palm 23.2°, fingers 61°",
  "turn|neutral-space|down:out+contra4|1h": "point 0.02 cm off, palm 3.2°, fingers 1.9°",
  "turn|neutral-space|down:out+contra4|2h": "point 0.01 cm off, palm 3.7°, fingers 1.8°",
  "turn|neutral-space|down:out+contra6|2h": "point 0.01 cm off, palm 3.6°, fingers 1.8°",
  "turn|neutral-space|down:out+contra8|2h": "point 0.02 cm off, palm 3.3°, fingers 1.8°",
  "turn|neutral-space|down:out+contra|1h": "point 0.01 cm off, palm 3.4°, fingers 0.5°",
  "turn|neutral-space|down:out+down2|2h": "point 0.01 cm off, palm 3.8°, fingers 1.1°",
  "turn|neutral-space|down:out+in4|1h": "point 0.01 cm off, palm 3.9°, fingers 2.6°",
  "turn|neutral-space|down:out+ipsi|1h": "point 0.03 cm off, palm 7.6°, fingers 8.4°",
  "turn|neutral-space|down:out+out12+up6|1h": "point 1.76 cm off, palm 4.8°, fingers 4.1°",
  "turn|neutral-space|down:out+out4|2h": "point 0.01 cm off, palm 3.5°, fingers 0.8°",
  "turn|neutral-space|down:out+up10+out6|1h": "point 0.02 cm off, palm 2.9°, fingers 1.9°",
  "turn|neutral-space|down:out+up6|2h": "point 0.01 cm off, palm 3.6°, fingers 2.6°",
  "turn|neutral-space|down:out+up8+out10|2h": "point 0.23 cm off, palm 4.2°, fingers 1.4°",
  "turn|neutral-space|down:out+up8|1h": "point 0.01 cm off, palm 3.5°, fingers 3.4°",
  "turn|neutral-space|down:out|1h": "point 0.01 cm off, palm 3.6°, fingers 1.8°",
  "turn|neutral-space|down:out|2h": "point 0.01 cm off, palm 3.8°, fingers 1.5°",
  "turn|neutral-space|in:contra+contra2+in6|2h": "point 0.01 cm off, palm 1.8°, fingers 1.8°",
  "turn|neutral-space|in:contra+contra3|2h": "point 0.01 cm off, palm 1.7°, fingers 1.6°",
  "turn|neutral-space|in:contra+contra4|1h": "point 0.01 cm off, palm 1.7°, fingers 1.7°",
  "turn|neutral-space|in:contra+contra4|2h": "point 0.01 cm off, palm 1.6°, fingers 1.6°",
  "turn|neutral-space|in:contra+contra8|2h": "point 0.01 cm off, palm 1.5°, fingers 1.5°",
  "turn|neutral-space|in:contra+ipsi6|1h": "point 0.04 cm off, palm 5.6°, fingers 5.7°",
  "turn|neutral-space|in:contra|1h": "point 0.01 cm off, palm 1.8°, fingers 1.7°",
  "turn|neutral-space|in:contra|2h": "point 0.01 cm off, palm 2.1°, fingers 2°",
  "turn|neutral-space|in:down+contra4|2h": "point 0.08 cm off, palm 6.1°, fingers 10.8°",
  "turn|neutral-space|in:up+contra6+in8|2h": "point 0.02 cm off, palm 1.9°, fingers 6.5°",
  "turn|neutral-space|in:up+out10+up6|1h": "point 1.5 cm off, palm 37.3°, fingers 39°",
  "turn|neutral-space|in:up+up6|1h": "point 0.02 cm off, palm 3.1°, fingers 3.3°",
  "turn|neutral-space|in:up+up6|2h": "point 0.01 cm off, palm 2.1°, fingers 2°",
  "turn|neutral-space|in:up+up8|1h": "point 0.01 cm off, palm 2.3°, fingers 2.3°",
  "turn|neutral-space|in:up|1h": "point 0.05 cm off, palm 7.2°, fingers 7.6°",
  "turn|neutral-space|in:up|2h": "point 0.03 cm off, palm 5.5°, fingers 5.5°",
  "turn|neutral-space|out:up+contra4|2h": "point 0.1 cm off, palm 15°, fingers 15.5°",
  "turn|neutral-space|out:up+contra5+down3+in2|1h": "point 0.11 cm off, palm 14.7°, fingers 17.3°",
  "turn|neutral-space|out:up+contra5|2h": "point 0.1 cm off, palm 15°, fingers 15.8°",
  "turn|neutral-space|out:up+contra6|2h": "point 0.1 cm off, palm 15°, fingers 16.1°",
  "turn|neutral-space|out:up+contra7|2h": "point 0.11 cm off, palm 15°, fingers 16.6°",
  "turn|neutral-space|out:up+ipsi+up6|2h": "point 0.05 cm off, palm 8.9°, fingers 9.1°",
  "turn|neutral-space|out:up+ipsi8|1h": "point 0.09 cm off, palm 13.2°, fingers 13.6°",
  "turn|neutral-space|out:up+up4|1h": "point 0.06 cm off, palm 9.8°, fingers 10°",
  "turn|neutral-space|out:up+up6|1h": "point 0.05 cm off, palm 8.3°, fingers 8.4°",
  "turn|neutral-space|out:up+up8|1h": "point 0.04 cm off, palm 6.9°, fingers 7°",
  "turn|neutral-space|out:up+up8|2h": "point 0.05 cm off, palm 8.5°, fingers 8.4°",
  "turn|neutral-space|out:up|1h": "point 0.09 cm off, palm 13.3°, fingers 13.6°",
  "turn|neutral-space|up:contra|1h": "point 0.05 cm off, palm 13.8°, fingers 9.6°",
  "turn|neutral-space|up:out+contra2|2h": "point 0.01 cm off, palm 2°, fingers 1.6°",
  "turn|neutral-space|up:out+contra5|2h": "point 0.01 cm off, palm 1.7°, fingers 1.3°",
  "turn|neutral-space|up:out+contra6|2h": "point 0.01 cm off, palm 1.6°, fingers 1.2°",
  "turn|neutral-space|up:out+contra|2h": "point 0.03 cm off, palm 6.8°, fingers 7.3°",
  "turn|neutral-space|up:out+out8|1h": "point 0 cm off, palm 1.4°, fingers 0.3°",
  "turn|neutral-space|up:out+out8|2h": "point 0 cm off, palm 1.4°, fingers 0.6°",
  "turn|neutral-space|up:out+up6|2h": "point 0.01 cm off, palm 2.1°, fingers 2.5°",
  "turn|neutral-space|up:out|1h": "point 0.01 cm off, palm 1.8°, fingers 1.5°",
  "turn|neutral-space|up:out|2h": "point 0.01 cm off, palm 2.2°, fingers 1.8°",
  "turn|nose|contra:up+out4|1h": "point 0.02 cm off, palm 4.6°, fingers 3.1°",
  "turn|nose|contra:up+out6|1h": "point 0.02 cm off, palm 4.7°, fingers 3.1°",
  "turn|nose|contra:up|1h": "point 0.02 cm off, palm 4.6°, fingers 3.2°",
  "turn|nose|down:contra+down3|1h": "point 0.06 cm off, palm 7.3°, fingers 8.9°",
  "turn|nose|down:out+out6+down4|1h": "point 0.22 cm off, palm 16.8°, fingers 44.6°",
  "turn|nose|in:up+down3|1h": "point 0.02 cm off, palm 1.2°, fingers 2°",
  "turn|nose|in:up+out4|1h": "point 0.01 cm off, palm 0.9°, fingers 1.6°",
  "turn|nose|in:up+out5|1h": "point 0.01 cm off, palm 0.8°, fingers 1.6°",
  "turn|nose|in:up+out6|2h": "point 0.01 cm off, palm 0.9°, fingers 1.7°",
  "turn|nose|in:up|1h": "point 0.01 cm off, palm 1.1°, fingers 1.9°",
  "turn|shoulder|contra:up+out6|1h": "point 0.02 cm off, palm 1°, fingers 5.3°",
  "turn|shoulder|contra:up|1h": "point 0.04 cm off, palm 2.9°, fingers 4.7°",
  "turn|shoulder|contra:up|2h": "point 0.04 cm off, palm 2.9°, fingers 4.7°",
  "turn|shoulder|down:in+out8|1h": "point 0.01 cm off, palm 0.9°, fingers 0.4°",
  "turn|shoulder|down:in|1h": "point 0 cm off, palm 1.5°, fingers 0.6°",
  "turn|shoulder|down:in|2h": "point 0 cm off, palm 1.5°, fingers 0.6°",
  "turn|shoulder|in:up+out10|1h": "point 0.01 cm off, palm 1.6°, fingers 3°",
  "turn|shoulder|in:up+up8|1h": "point 0.09 cm off, palm 10.9°, fingers 15°",
  "turn|shoulder|out:up+up4|2h": "point 0.1 cm off, palm 7.9°, fingers 18.3°",
  "turn|weak-hand|contra:out+down10|1h": "point 0.01 cm off, palm 1.6°, fingers 1.8°",
  "turn|weak-hand|contra:out+down1|1h": "point 0.01 cm off, palm 1.3°, fingers 0.8°",
  "turn|weak-hand|contra:out+down2|1h": "point 0.01 cm off, palm 1.4°, fingers 0.9°",
  "turn|weak-hand|contra:out+down3|1h": "point 0.01 cm off, palm 1.5°, fingers 1°",
  "turn|weak-hand|contra:out+down5+ipsi3|1h": "point 0.01 cm off, palm 1.9°, fingers 0.9°",
  "turn|weak-hand|contra:out+down6|1h": "point 0.01 cm off, palm 1.7°, fingers 1.2°",
  "turn|weak-hand|contra:out+down8|1h": "point 0.01 cm off, palm 1.7°, fingers 1.5°",
  "turn|weak-hand|contra:out+in10|1h": "point 0.02 cm off, palm 2.7°, fingers 3.3°",
  "turn|weak-hand|contra:out+in4+down2|1h": "point 0.02 cm off, palm 2.6°, fingers 1.2°",
  "turn|weak-hand|contra:out+in4+down5|1h": "point 0.02 cm off, palm 2.7°, fingers 1.1°",
  "turn|weak-hand|contra:out+up3|1h": "point 0 cm off, palm 0.8°, fingers 0.5°",
  "turn|weak-hand|contra:out+up4|1h": "point 0 cm off, palm 0.8°, fingers 0.5°",
  "turn|weak-hand|contra:out|1h": "point 0 cm off, palm 1.2°, fingers 0.8°",
  "turn|weak-hand|contra:up+down3|1h": "point 0.09 cm off, palm 13.6°, fingers 17.1°",
  "turn|weak-hand|contra:up|1h": "point 0.07 cm off, palm 11.6°, fingers 13.5°",
  "turn|weak-hand|down:contra+down1|1h": "point 0.02 cm off, palm 0.7°, fingers 6.9°",
  "turn|weak-hand|down:contra+down2|1h": "point 0.02 cm off, palm 0.9°, fingers 6.9°",
  "turn|weak-hand|down:contra+down3|1h": "point 0.02 cm off, palm 1.1°, fingers 6.8°",
  "turn|weak-hand|down:contra+up3|1h": "point 0.02 cm off, palm 0.1°, fingers 6.8°",
  "turn|weak-hand|down:contra+up4|1h": "point 0.02 cm off, palm 0.3°, fingers 6.7°",
  "turn|weak-hand|down:contra+up6|1h": "point 0.02 cm off, palm 0.6°, fingers 6.5°",
  "turn|weak-hand|down:contra|1h": "point 0.02 cm off, palm 0.5°, fingers 6.9°",
  "turn|weak-hand|down:out+contra+down2|1h": "point 0 cm off, palm 0.2°, fingers 1°",
  "turn|weak-hand|down:out+contra+down3|1h": "point 0 cm off, palm 0.3°, fingers 1°",
  "turn|weak-hand|down:out+contra+down4|1h": "point 0 cm off, palm 0.3°, fingers 1°",
  "turn|weak-hand|down:out+contra+up2|1h": "point 0 cm off, palm 0.1°, fingers 0.9°",
  "turn|weak-hand|down:out+contra|1h": "point 0 cm off, palm 0.2°, fingers 0.9°",
  "turn|weak-hand|down:out+down1|1h": "point 0 cm off, palm 0.5°, fingers 1.5°",
  "turn|weak-hand|down:out+down2|1h": "point 0 cm off, palm 0.5°, fingers 1.4°",
  "turn|weak-hand|down:out+down3|1h": "point 0 cm off, palm 0.4°, fingers 1.4°",
  "turn|weak-hand|down:out+in6+down4|1h": "point 0.01 cm off, palm 1.1°, fingers 1.8°",
  "turn|weak-hand|down:out+in8+up4|1h": "point 0.01 cm off, palm 3.2°, fingers 3°",
  "turn|weak-hand|down:out+up3|1h": "point 0.01 cm off, palm 0.7°, fingers 1.8°",
  "turn|weak-hand|down:out+up5|1h": "point 0.01 cm off, palm 2.2°, fingers 2.2°",
  "turn|weak-hand|down:out|1h": "point 0 cm off, palm 0.6°, fingers 1.6°",
  "turn|weak-hand|in:contra+down1|1h": "point 0.01 cm off, palm 1.6°, fingers 2.4°",
  "turn|weak-hand|in:contra+down3|1h": "point 0.01 cm off, palm 1.7°, fingers 2.6°",
  "turn|weak-hand|in:contra+down4|1h": "point 0.01 cm off, palm 1.7°, fingers 2.7°",
  "turn|weak-hand|in:contra+down6|1h": "point 0.01 cm off, palm 1.7°, fingers 3°",
  "turn|weak-hand|in:contra+down7|1h": "point 0.01 cm off, palm 1.8°, fingers 3.1°",
  "turn|weak-hand|in:contra+in3+down5|1h": "point 0.01 cm off, palm 1.5°, fingers 2.7°",
  "turn|weak-hand|in:contra|1h": "point 0.01 cm off, palm 1.6°, fingers 2.3°",
  "turn|weak-hand|in:down+down2|1h": "point 0.04 cm off, palm 4.9°, fingers 11.3°",
  "turn|weak-hand|in:down+down4|1h": "point 0.03 cm off, palm 3.3°, fingers 7.4°",
  "turn|weak-hand|in:down+down8|1h": "point 0.01 cm off, palm 1.6°, fingers 2.6°",
  "turn|weak-hand|in:down+down9|1h": "point 0.01 cm off, palm 1.6°, fingers 2.3°",
  "turn|weak-hand|in:down+up4|1h": "point 0.09 cm off, palm 9.2°, fingers 24°",
  "turn|weak-hand|in:down+up6|1h": "point 0.11 cm off, palm 10.6°, fingers 28.6°",
  "turn|weak-hand|in:up+down3|1h": "point 0.07 cm off, palm 9.6°, fingers 15°",
  "turn|weak-hand|in:up+down4|1h": "point 0.08 cm off, palm 10.3°, fingers 16.3°",
  "turn|weak-hand|in:up+down6|1h": "point 0.1 cm off, palm 12°, fingers 19.1°",
  "turn|weak-hand|in:up+out3+down4|1h": "point 0.12 cm off, palm 13.2°, fingers 19.7°",
  "turn|weak-hand|in:up+up6|1h": "point 0.03 cm off, palm 4.5°, fingers 7.2°",
  "turn|weak-hand|ipsi:out|1h": "point 0.01 cm off, palm 3.6°, fingers 3.8°",
  "turn|weak-hand|out:up+down1|1h": "point 0.05 cm off, palm 6.9°, fingers 10.6°",
  "turn|weak-hand|up:contra+down14|1h": "point 0.01 cm off, palm 1.4°, fingers 2.7°",
  "turn|weak-hand|up:contra+down3|1h": "point 0.01 cm off, palm 1.6°, fingers 2.4°",
  "turn|weak-hand|up:out+contra+down3|1h": "point 0.01 cm off, palm 1.4°, fingers 0.7°",
  "turn|weak-hand|up:out+down10+ipsi6|1h": "point 0.01 cm off, palm 1.9°, fingers 1.9°",
  "turn|weak-hand|up:out+down2|1h": "point 0.06 cm off, palm 6.5°, fingers 0.4°",
  "turn|weak-hand|up:out+down3|1h": "point 0.07 cm off, palm 7.3°, fingers 0.2°",
  "turn|weak-hand|up:out+down9|1h": "point 0.01 cm off, palm 1.5°, fingers 2.5°",
};
