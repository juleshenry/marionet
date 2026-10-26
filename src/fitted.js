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
  // worst point 0 cm off, palm 0.6°, fingers 0.6°
  "path|cheek|in:up|1h|linear:out": [
    { UpperArm: [0.087, -0.106, -0.094], LowerArm: [0, -0.26, 0], Hand: [-0.09, 0.08, 0.318] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.3°
  "path|cheek|in:up|1h|tap": [
    { UpperArm: [-0.001, -0.11, -0.058], LowerArm: [0, 0.034, 0], Hand: [-0.11, -0.053, -0.011] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 1.3°
  "path|chest-front|contra:out+ipsi4|2h|linear:down": [
    { UpperArm: [0.149, 0.068, -0.041], LowerArm: [0, -0.223, 0], Hand: [0.009, 0.354, -0.024] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.1°
  "path|chest|contra:up|1h|tap": [
    { UpperArm: [-0.102, 0.016, 0.015], LowerArm: [0, -0.135, 0], Hand: [0.01, -0.035, -0.005] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.2°
  "path|chest|down:in+contra|1h|tap": [
    { UpperArm: [-0.091, 0.032, 0.003], LowerArm: [0, -0.146, 0], Hand: [-0.023, 0.022, 0.055] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.1°
  "path|chest|in:contra+ipsi4|2h|linear:out": [
    { UpperArm: [-0.265, 0.136, -0.029], LowerArm: [0, -0.388, 0], Hand: [0.046, 0.105, -0.025] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.4°
  "path|chest|in:up|1h|linear:out": [
    { UpperArm: [-0.288, -0.012, 0.022], LowerArm: [0, -0.323, 0], Hand: [-0.104, -0.054, 0.067] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0°
  "path|chin|contra:up|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.002, 0.028, -0.598] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.3°
  "path|chin|contra:up|1h|tap": [
    { UpperArm: [-0.017, 0.011, -0.004], LowerArm: [0, -0.122, 0], Hand: [0.009, 0.099, -0.001] },
  ],
  // worst point 0 cm off, palm 0.8°, fingers 0.4°
  "path|chin|in:contra|1h|tap": [
    { UpperArm: [-0.042, -0.017, -0.165], LowerArm: [0, -0.093, 0], Hand: [-0.075, 0.138, 0.032] },
  ],
  // worst point 0.01 cm off, palm 1.8°, fingers 1.1°
  "path|chin|in:up|1h|linear:out+down": [
    { UpperArm: [0.082, -0.12, -0.022], LowerArm: [0, -0.271, 0], Hand: [-0.272, 0.06, 0.459] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.6°
  "path|eye|in:up+down2|1h|linear:out": [
    { UpperArm: [-0.038, -0.129, -0.076], LowerArm: [0, -0.304, 0], Hand: [-0.067, 0.059, 0.243] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|eye|in:up+down2|1h|tap": [
    { UpperArm: [-0.02, -0.075, -0.026], LowerArm: [0, -0.096, 0], Hand: [-0.069, 0.017, 0.071] },
  ],
  // worst point 0.01 cm off, palm 1.8°, fingers 2.4°
  "path|forehead|contra:out+out8+ipsi7+up2|2h|linear:out": [
    { UpperArm: [0.204, 0.106, -0.11], LowerArm: [0, -0.204, 0], Hand: [0.144, 0.396, 0.113] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0.4°
  "path|forehead|contra:up|1h|tap": [
    { UpperArm: [0.017, 0.014, -0.003], LowerArm: [0, -0.105, 0], Hand: [0.018, 0.108, 0.012] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 1°
  "path|forehead|out:up+contra+ipsi5|1h|linear:out+ipsi": [
    { UpperArm: [0.016, -0.148, -0.037], LowerArm: [0, -0.252, 0], Hand: [-0.046, 0.322, -0.049] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|head|out:up+ipsi8+out8|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0.001, 0.001] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, 0] },
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
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|mouth|in:up|1h|tap": [
    { UpperArm: [-0.017, -0.028, -0.01], LowerArm: [0, -0.115, 0], Hand: [-0.043, 0.006, 0.106] },
  ],
  // worst point 0 cm off, palm 0°, fingers 0°
  "path|neutral-space-high|out:up|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.014, 0.025, -0.596] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.1°
  "path|neutral-space|contra+down:up+contra+contra4|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.793, 0, -0.006] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.792, -0.001, 0.007] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|neutral-space|contra:out+contra6|2h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.798, 0, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.798, -0.001, -0.002] },
  ],
  // worst point 0.01 cm off, palm 0°, fingers 0.8°
  "path|neutral-space|contra:out|2h|linear:out": [
    { UpperArm: [-0.372, 0.023, -0.006], LowerArm: [0, -0.607, 0], Hand: [0.014, 0.222, 0.004] },
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
  // worst point 0 cm off, palm 0.6°, fingers 1°
  "path|neutral-space|down:out+contra4|2h|linear:ipsi": [
    { UpperArm: [-0.005, -0.369, -0.001], LowerArm: [0, 0.018, 0], Hand: [0.145, 0.315, 0.073] },
  ],
  // worst point 0 cm off, palm 0.8°, fingers 1.1°
  "path|neutral-space|down:out+contra6|2h|linear:ipsi": [
    { UpperArm: [0.026, -0.406, 0.014], LowerArm: [0, 0.048, 0], Hand: [0.201, 0.323, 0.101] },
  ],
  // worst point 0 cm off, palm 0.6°, fingers 0.6°
  "path|neutral-space|down:out|1h|linear:down": [
    { UpperArm: [0.044, -0.039, 0.092], LowerArm: [0, -0.282, 0], Hand: [0.013, 0.119, -0.279] },
  ],
  // worst point 0.01 cm off, palm 0.5°, fingers 0.7°
  "path|neutral-space|down:out|1h|linear:out": [
    { UpperArm: [-0.351, -0.011, 0.17], LowerArm: [0, -0.62, 0], Hand: [-0.023, 0.189, -0.197] },
  ],
  // worst point 0 cm off, palm 0.2°, fingers 0.8°
  "path|neutral-space|down:out|1h|linear:out+ipsi": [
    { UpperArm: [-0.209, -0.096, 0.005], LowerArm: [0, -0.367, 0], Hand: [-0.027, 0.241, -0.101] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|neutral-space|down:out|1h|nod": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.017, 0.023, -0.606] },
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
  // worst point 0 cm off, palm 0.7°, fingers 0.3°
  "path|neutral-space|in:contra+contra3|2h|linear:up": [
    { UpperArm: [-0.11, -0.064, 0.001], LowerArm: [0, 0.172, 0], Hand: [-0.001, -0.258, -0.007] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.5°
  "path|neutral-space|in:up|2h|linear:up": [
    { UpperArm: [0.015, -0.001, 0.111], LowerArm: [0, 0.249, 0], Hand: [0.011, -0.086, -0.266] },
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
  // worst point 0 cm off, palm 0°, fingers 0.1°
  "path|neutral-space|out:up+contra6|2h|twist": [
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
  // worst point 0 cm off, palm 0.3°, fingers 0.7°
  "path|weak-hand|contra:out+down3|1h|linear:up": [
    { UpperArm: [-0.116, -0.003, 0.059], LowerArm: [0, 0.136, 0], Hand: [0.019, -0.25, 0.019] },
  ],
  // worst point 0 cm off, palm 0.1°, fingers 0°
  "path|weak-hand|contra:out|1h|twist": [
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [-0.797, 0, 0.002] },
    { UpperArm: [0, 0, 0], LowerArm: [0, 0, 0], Hand: [0.797, -0.001, -0.002] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|weak-hand|down:contra+down3|1h|tap": [
    { UpperArm: [-0.123, -0.087, 0.099], LowerArm: [0, 0.067, 0], Hand: [-0.019, -0.001, 0.123] },
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
  // worst point 0.01 cm off, palm 0.5°, fingers 0.7°
  "path|weak-hand|down:out+down2|1h|linear:out": [
    { UpperArm: [-0.41, -0.047, 0.337], LowerArm: [0, -0.55, 0], Hand: [-0.02, 0.319, -0.109] },
  ],
  // worst point 0 cm off, palm 0.7°, fingers 0.7°
  "path|weak-hand|down:out+down3|1h|linear:out": [
    { UpperArm: [-0.282, -0.062, 0.191], LowerArm: [0, -0.317, 0], Hand: [-0.05, 0.259, -0.009] },
  ],
  // worst point 0 cm off, palm 0.4°, fingers 0.2°
  "path|weak-hand|down:out|1h|tap": [
    { UpperArm: [-0.044, 0.02, -0.045], LowerArm: [0, 0.048, 0], Hand: [-0.019, -0.038, 0.079] },
  ],
  // worst point 0.13 cm off, palm 3.9°, fingers 6.9°
  "path|weak-hand|in:down+up4|1h|linear:out": [
    { UpperArm: [-0.249, -0.655, 0.443], LowerArm: [0, -0.576, 0], Hand: [0.692, 0.458, 0.076] },
  ],
  // worst point 0 cm off, palm 0.3°, fingers 0.2°
  "path|weak-hand|ipsi:out|1h|tap": [
    { UpperArm: [-0.116, -0.086, 0.103], LowerArm: [0, 0.036, 0], Hand: [0.009, 0.11, 0.003] },
  ],
  // worst point 0 cm off, palm 0.5°, fingers 0.2°
  "path|weak-hand|up:contra+down14|1h|tap": [
    { UpperArm: [0.116, -0.017, 0.093], LowerArm: [0, 0.234, 0], Hand: [0.007, -0.152, -0.04] },
  ],
  // point 0.01 cm off, palm 0.4°, fingers 1.2°
  "site|cheek|contra:up|A|thumb|1h": [
    { UpperArm: [-0.576, -0.083, 0.102], LowerArm: [0, -0.17, 0], Hand: [-0.102, -0.368, 0.124] },
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
  // point 0.03 cm off, palm 2.5°, fingers 4.8°
  "site|chest|contra:up|5|thumb|1h": [
    { UpperArm: [-0.298, -0.021, -0.163], LowerArm: [0, 0.129, 0], Hand: [-0.753, 0.581, 0.313] },
  ],
  // point 0.03 cm off, palm 2.5°, fingers 4.8°
  "site|chest|contra:up|curved_5|thumb|1h": [
    { UpperArm: [-0.3, -0.019, -0.163], LowerArm: [0, 0.129, 0], Hand: [-0.756, 0.583, 0.315] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.3°
  "site|chest|in:contra+ipsi4|C|fingertips|2h": [
    { UpperArm: [-0.134, 0.245, 0.118], LowerArm: [0, -0.134, 0], Hand: [0.137, -0.068, -0.154] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.3°
  "site|chest|in:contra|C|fingertips|2h": [
    { UpperArm: [-0.193, 0.244, 0.102], LowerArm: [0, -0.181, 0], Hand: [0.126, -0.072, -0.139] },
  ],
  // point 0.01 cm off, palm 0.8°, fingers 1.3°
  "site|chest|in:up|open_b|palm|1h": [
    { UpperArm: [-0.061, -0.004, -0.057], LowerArm: [0, 0.45, 0], Hand: [0.118, -0.01, -0.532] },
  ],
  // point 0.02 cm off, palm 2.1°, fingers 1.3°
  "site|chest|up:in|C|fingertips|2h": [
    { UpperArm: [0.101, -0.137, 0.215], LowerArm: [0, 0.158, 0], Hand: [0.298, -0.063, 0.009] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1°
  "site|chin|contra:up|5|thumb|1h": [
    { UpperArm: [-0.676, -0.286, -0.04], LowerArm: [0, -0.225, 0], Hand: [-0.591, -0.16, 0.184] },
  ],
  // point 0.01 cm off, palm 0.7°, fingers 1.2°
  "site|chin|contra:up|A|thumb|1h": [
    { UpperArm: [-0.546, -0.122, 0.187], LowerArm: [0, -0.043, 0], Hand: [-0.296, -0.325, 0.23] },
  ],
  // point 0.02 cm off, palm 1.2°, fingers 2.7°
  "site|chin|contra:up|F|index|1h": [
    { UpperArm: [-0.451, -0.331, -0.048], LowerArm: [0, 0.086, 0], Hand: [-0.545, -0.22, 0.179] },
  ],
  // point 0.01 cm off, palm 1°, fingers 1°
  "site|chin|contra:up|L|thumb|1h": [
    { UpperArm: [-0.675, -0.295, -0.049], LowerArm: [0, -0.215, 0], Hand: [-0.603, -0.163, 0.185] },
  ],
  // point 0.02 cm off, palm 4.5°, fingers 2.8°
  "site|chin|in:contra|Y|fingertips|1h": [
    { UpperArm: [-0.097, 0.366, 0.955], LowerArm: [0, -0.181, 0], Hand: [0.711, -0.902, -0.252] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|chin|in:up|open_b|fingertips|1h": [
    { UpperArm: [0.035, -0.039, -0.094], LowerArm: [0, 0.044, 0], Hand: [-0.062, 0.039, -0.003] },
  ],
  // point 0 cm off, palm 0.4°, fingers 1°
  "site|eye|in:up+down2|V|index|1h": [
    { UpperArm: [-0.042, 0.172, 0.014], LowerArm: [0, -0.053, 0], Hand: [0.127, 0.182, -0.048] },
  ],
  // point 0 cm off, palm 0.8°, fingers 1°
  "site|forehead|contra:up|5|thumb|1h": [
    { UpperArm: [-0.311, -0.249, -0.049], LowerArm: [0, -0.499, 0], Hand: [-0.213, 0.269, 0.233] },
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
  // point 0 cm off, palm 0.4°, fingers 0.5°
  "site|mouth|in:up|flat_o|fingertips|1h": [
    { UpperArm: [-0.566, -0.206, 0.126], LowerArm: [0, -0.316, 0], Hand: [-0.222, -0.144, -0.12] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|neutral-space-high|in:up|Y|fingertips|1h": [
    { UpperArm: [-0.105, -0.012, -0.046], LowerArm: [0, -0.162, 0], Hand: [-0.004, 0.014, 0.081] },
  ],
  // point 0 cm off, palm 0.6°, fingers 0.6°
  "site|neutral-space-high|out:up|open_b|fingertips|1h": [
    { UpperArm: [0.289, -0.042, 0.039], LowerArm: [0, -0.023, 0], Hand: [0.05, 0.037, -0.292] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.2°
  "site|weak-hand|contra:out+down3|A|pinky-side|1h": [
    { UpperArm: [-0.035, -0.004, 0.015], LowerArm: [0, 0.028, 0], Hand: [0.003, -0.063, 0.006] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.2°
  "site|weak-hand|contra:out|S|pinky-side|1h": [
    { UpperArm: [-0.042, -0.004, 0.016], LowerArm: [0, 0.016, 0], Hand: [0.007, -0.059, 0.006] },
  ],
  // point 0.01 cm off, palm 2.4°, fingers 3.8°
  "site|weak-hand|contra:up|C|fingertips|1h": [
    { UpperArm: [0.261, 0.081, -0.281], LowerArm: [0, -0.065, 0], Hand: [0.302, 0.273, -0.511] },
  ],
  // point 0 cm off, palm 0.2°, fingers 0.1°
  "site|weak-hand|down:contra+down3|open_b|palm|1h": [
    { UpperArm: [-0.07, -0.044, 0.058], LowerArm: [0, 0.039, 0], Hand: [-0.007, -0.001, 0.061] },
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
  // point 0.01 cm off, palm 1.7°, fingers 0.6°
  "site|weak-hand|down:out+down2|5|fingertips|1h": [
    { UpperArm: [0.436, 0.095, -0.363], LowerArm: [0, 0.541, 0], Hand: [0.002, -0.45, 0.023] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|down:out+down2|K|palm|1h": [
    { UpperArm: [-0.01, 0.017, -0.033], LowerArm: [0, 0.035, 0], Hand: [-0.016, -0.027, 0.037] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|down:out+down2|flat_b|palm|1h": [
    { UpperArm: [-0.01, 0.017, -0.033], LowerArm: [0, 0.035, 0], Hand: [-0.016, -0.027, 0.037] },
  ],
  // point 0.01 cm off, palm 3°, fingers 1.3°
  "site|weak-hand|down:out+down2|flat_o|fingertips|1h": [
    { UpperArm: [-0.051, 0.003, -0.176], LowerArm: [0, 0.283, 0], Hand: [0.04, -0.156, 0.318] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|down:out+down2|open_b|palm|1h": [
    { UpperArm: [-0.01, 0.017, -0.033], LowerArm: [0, 0.035, 0], Hand: [-0.016, -0.027, 0.037] },
  ],
  // point 0.03 cm off, palm 2.9°, fingers 4.2°
  "site|weak-hand|down:out+down3|1|index|1h": [
    { UpperArm: [0.431, 0.056, -0.311], LowerArm: [0, 0.544, 0], Hand: [0.034, -0.473, 0.01] },
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
  // point 0.14 cm off, palm 11°, fingers 10.2°
  "site|weak-hand|in:down+down2|bent_b|fingertips|1h": [
    { UpperArm: [-0.403, -0.733, 0.51], LowerArm: [0, -0.583, 0], Hand: [0.947, 0.358, 0.27] },
  ],
  // point 0 cm off, palm 0.4°, fingers 0.3°
  "site|weak-hand|ipsi:out|A|thumb|1h": [
    { UpperArm: [-0.174, -0.043, 0.171], LowerArm: [0, 0.138, 0], Hand: [0.017, 0.14, 0.133] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|up:out+down2|K|back|1h": [
    { UpperArm: [-0.014, 0.008, 0.009], LowerArm: [0, 0.032, 0], Hand: [0.014, -0.007, -0.047] },
  ],
  // point 0 cm off, palm 0.1°, fingers 0.1°
  "site|weak-hand|up:out+down2|open_b|back|1h": [
    { UpperArm: [-0.014, 0.008, 0.009], LowerArm: [0, 0.032, 0], Hand: [0.014, -0.007, -0.047] },
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
  // point 0.06 cm off, palm 19.7°, fingers 5.4°
  "turn|base-hand|down:out|1h": [
    { UpperArm: [-0.253, 0.984, -0.911], LowerArm: [0, 0.007, 0], Hand: [1.801, 0.308, -0.028] },
  ],
  // point 0.09 cm off, palm 27.3°, fingers 3.1°
  "turn|base-hand|out:up|1h": [
    { UpperArm: [-0.382, 1.214, -0.952], LowerArm: [0, -0.446, 0], Hand: [-1.342, -1.402, 1.294] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1.4°
  "turn|base-hand|up:out|1h": [
    { UpperArm: [0.191, -0.035, 0.256], LowerArm: [0, 0.016, 0], Hand: [0.198, 0.385, 0.105] },
  ],
  // point 0.01 cm off, palm 1.6°, fingers 1.7°
  "turn|cheek|contra:in+up+up2+ipsi2|1h": [
    { UpperArm: [-0.414, -0.268, 0.155], LowerArm: [0, -0.368, 0], Hand: [0.386, 0.59, 0.153] },
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
  // point 0.02 cm off, palm 2.1°, fingers 4.3°
  "turn|cheek|in:up|1h": [
    { UpperArm: [0.007, 0.28, -0.016], LowerArm: [0, 0.033, 0], Hand: [-0.599, 0.025, -0.091] },
  ],
  // point 0.01 cm off, palm 2.4°, fingers 3.1°
  "turn|chest-front|contra:out+ipsi4|2h": [
    { UpperArm: [0.054, -0.187, -0.001], LowerArm: [0, 0.269, 0], Hand: [0.979, -0.718, -1.089] },
  ],
  // point 0.03 cm off, palm 4.4°, fingers 5.5°
  "turn|chest-front|contra:out|1h": [
    { UpperArm: [0.059, 0.05, 0.138], LowerArm: [0, 0.169, 0], Hand: [0.59, -0.569, -1.261] },
  ],
  // point 0.01 cm off, palm 0.6°, fingers 2.7°
  "turn|chest-front|in:contra+in2|1h": [
    { UpperArm: [0, -0.066, 0.003], LowerArm: [0, 0.136, 0], Hand: [0.413, -0.583, 0.28] },
  ],
  // point 0.07 cm off, palm 1.5°, fingers 1.5°
  "turn|chest-front|in:up+contra+in5|1h": [
    { UpperArm: [0.185, -0.017, 0.02], LowerArm: [0, 0.175, 0], Hand: [-0.1, -0.011, 0.167] },
  ],
  // point 0.15 cm off, palm 30.4°, fingers 12.4°
  "turn|chest|contra:up|1h": [
    { UpperArm: [-0.169, 0.315, 0.115], LowerArm: [0, -0.356, 0], Hand: [-0.899, 1.282, 0.634] },
  ],
  // point 0.02 cm off, palm 3.2°, fingers 2°
  "turn|chest|down:in+contra|1h": [
    { UpperArm: [-0.699, 0.129, -0.034], LowerArm: [0, -0.206, 0], Hand: [-0.225, 0.618, 0.969] },
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
  // point 0.01 cm off, palm 1.8°, fingers 3.4°
  "turn|chest|in:contra|2h": [
    { UpperArm: [-0.305, -0.224, -0.069], LowerArm: [0, 0.17, 0], Hand: [0.48, -0.598, 0.322] },
  ],
  // point 0.04 cm off, palm 3.7°, fingers 4°
  "turn|chest|in:up|1h": [
    { UpperArm: [-0.177, 0.519, 0.107], LowerArm: [0, -0.407, 0], Hand: [-0.765, 0.378, 0.437] },
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
  // point 0.08 cm off, palm 11.9°, fingers 25.1°
  "turn|chin|in:contra|1h": [
    { UpperArm: [-0.452, -0.476, -0.056], LowerArm: [0, 0.09, 0], Hand: [-0.715, -1.209, -0.065] },
  ],
  // point 0.02 cm off, palm 1.5°, fingers 1.6°
  "turn|chin|in:up+down3|1h": [
    { UpperArm: [0.235, 0.567, -0.077], LowerArm: [0, -0.141, 0], Hand: [-0.151, 0.607, -0.111] },
  ],
  // point 0.01 cm off, palm 0.3°, fingers 2.1°
  "turn|chin|in:up+out4|1h": [
    { UpperArm: [-0.003, 0.384, 0.106], LowerArm: [0, -0.208, 0], Hand: [-0.293, 0.37, -0.106] },
  ],
  // point 0.01 cm off, palm 0.8°, fingers 1.9°
  "turn|chin|in:up|1h": [
    { UpperArm: [0.101, 0.487, 0.098], LowerArm: [0, -0.072, 0], Hand: [-0.12, 0.381, -0.218] },
  ],
  // point 0.03 cm off, palm 2°, fingers 5.1°
  "turn|eye|in:up+down2|1h": [
    { UpperArm: [0.648, 0.538, 0.28], LowerArm: [0, 0.282, 0], Hand: [0.049, 0.964, -0.516] },
  ],
  // point 0.15 cm off, palm 6.3°, fingers 36.3°
  "turn|forehead|contra:out+out8+ipsi7+up2|2h": [
    { UpperArm: [-0.4, -0.046, -0.021], LowerArm: [0, 0.146, 0], Hand: [0.906, -0.996, -0.634] },
  ],
  // point 0.02 cm off, palm 3.4°, fingers 3.8°
  "turn|forehead|contra:up|1h": [
    { UpperArm: [0.054, 0.582, -0.281], LowerArm: [0, 0.233, 0], Hand: [1.257, 0.253, -0.912] },
  ],
  // point 0.21 cm off, palm 22.4°, fingers 36.1°
  "turn|forehead|down:out+out10+up2|1h": [
    { UpperArm: [-0.216, 0.128, 1.017], LowerArm: [0, -0.325, 0], Hand: [-1.743, 0.916, 0.756] },
  ],
  // point 0.05 cm off, palm 15.7°, fingers 3.9°
  "turn|forehead|out:up+contra+ipsi5|1h": [
    { UpperArm: [-0.403, -0.288, -0.387], LowerArm: [0, 0.159, 0], Hand: [1.708, 1.149, 0.619] },
  ],
  // point 0 cm off, palm 1°, fingers 0.6°
  "turn|head|contra:up+ipsi4+out2|1h": [
    { UpperArm: [-0.099, -0.192, -0.328], LowerArm: [0, 0.051, 0], Hand: [0.33, -0.053, -0.136] },
  ],
  // point 0.04 cm off, palm 7.5°, fingers 8.9°
  "turn|head|in:up+contra|1h": [
    { UpperArm: [-0.383, -0.198, -0.674], LowerArm: [0, 0.015, 0], Hand: [-1.607, -0.392, -0.51] },
  ],
  // point 0.01 cm off, palm 4.6°, fingers 1.7°
  "turn|head|out:up+ipsi8+out8|2h": [
    { UpperArm: [-0.196, -0.251, -0.687], LowerArm: [0, -0.148, 0], Hand: [1.553, 0.148, -0.263] },
  ],
  // point 0.13 cm off, palm 1.1°, fingers 16.3°
  "turn|mouth|contra:out+up|1h": [
    { UpperArm: [-0.034, 0.829, -0.149], LowerArm: [0, 0.26, 0], Hand: [1.194, -0.685, -1.313] },
  ],
  // point 0.26 cm off, palm 5°, fingers 48.8°
  "turn|mouth|contra:out|1h": [
    { UpperArm: [-0.39, 0.925, 0.149], LowerArm: [0, 0.319, 0], Hand: [1.181, -1.21, -1.299] },
  ],
  // point 0.01 cm off, palm 0.9°, fingers 1.4°
  "turn|mouth|in:up+out4|1h": [
    { UpperArm: [0.01, 0.384, 0.04], LowerArm: [0, -0.196, 0], Hand: [-0.311, 0.449, -0.217] },
  ],
  // point 0.01 cm off, palm 1.2°, fingers 1.7°
  "turn|mouth|in:up|1h": [
    { UpperArm: [0.062, 0.54, -0.059], LowerArm: [0, -0.037, 0], Hand: [-0.208, 0.549, -0.4] },
  ],
  // point 0.01 cm off, palm 0.5°, fingers 2°
  "turn|neutral-space-high|contra:up|1h": [
    { UpperArm: [-0.064, -0.263, 0.284], LowerArm: [0, -0.138, 0], Hand: [0.108, 0.589, -0.052] },
  ],
  // point 0.01 cm off, palm 2.9°, fingers 1.5°
  "turn|neutral-space-high|in:up|1h": [
    { UpperArm: [0.082, -0.788, 0.747], LowerArm: [0, -0.141, 0], Hand: [-0.914, -0.578, 0.999] },
  ],
  // point 0.01 cm off, palm 3.4°, fingers 2.1°
  "turn|neutral-space-high|out:up|1h": [
    { UpperArm: [-0.051, -0.02, 0.114], LowerArm: [0, -0.141, 0], Hand: [1.3, -0.485, -0.919] },
  ],
  // point 0.04 cm off, palm 5.3°, fingers 11.8°
  "turn|neutral-space|contra+down:up+contra+contra4|2h": [
    { UpperArm: [-0.117, 0.484, -0.145], LowerArm: [0, -0.285, 0], Hand: [0.728, 1.09, -0.52] },
  ],
  // point 0 cm off, palm 0.8°, fingers 1°
  "turn|neutral-space|contra:out+contra6|2h": [
    { UpperArm: [0.067, 0.018, 0.254], LowerArm: [0, 0.003, 0], Hand: [0.242, -0.252, -0.4] },
  ],
  // point 0 cm off, palm 1°, fingers 1°
  "turn|neutral-space|contra:out+contra8.5|2h": [
    { UpperArm: [0.065, 0.056, 0.315], LowerArm: [0, -0.041, 0], Hand: [0.271, -0.234, -0.457] },
  ],
  // point 0 cm off, palm 0.5°, fingers 1°
  "turn|neutral-space|contra:out|1h": [
    { UpperArm: [0.041, -0.085, 0.11], LowerArm: [0, 0.043, 0], Hand: [0.157, -0.282, -0.264] },
  ],
  // point 0 cm off, palm 0.5°, fingers 1°
  "turn|neutral-space|contra:out|2h": [
    { UpperArm: [0.032, -0.072, 0.096], LowerArm: [0, 0.051, 0], Hand: [0.157, -0.274, -0.273] },
  ],
  // point 0.06 cm off, palm 6.2°, fingers 17.7°
  "turn|neutral-space|contra:up+contra5|2h": [
    { UpperArm: [0.045, -0.263, 0.38], LowerArm: [0, -0.334, 0], Hand: [0.139, 1.217, 0.154] },
  ],
  // point 0.07 cm off, palm 6°, fingers 18.3°
  "turn|neutral-space|contra:up+contra6|2h": [
    { UpperArm: [0.02, -0.187, 0.356], LowerArm: [0, -0.346, 0], Hand: [0.263, 1.22, -0.031] },
  ],
  // point 0.01 cm off, palm 3.7°, fingers 1.8°
  "turn|neutral-space|down:out+contra4|2h": [
    { UpperArm: [-0.017, 0.478, -0.146], LowerArm: [0, 0.029, 0], Hand: [1.25, -0.495, -0.111] },
  ],
  // point 0.01 cm off, palm 3.6°, fingers 1.8°
  "turn|neutral-space|down:out+contra6|2h": [
    { UpperArm: [-0.036, 0.613, -0.156], LowerArm: [0, 0.004, 0], Hand: [1.162, -0.598, -0.155] },
  ],
  // point 0.01 cm off, palm 3.6°, fingers 1.8°
  "turn|neutral-space|down:out|1h": [
    { UpperArm: [-0.041, 0.415, -0.246], LowerArm: [0, 0.045, 0], Hand: [1.181, -0.517, -0.024] },
  ],
  // point 0.01 cm off, palm 3.8°, fingers 1.5°
  "turn|neutral-space|down:out|2h": [
    { UpperArm: [-0.007, 0.254, -0.142], LowerArm: [0, 0.053, 0], Hand: [1.354, -0.305, -0.058] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 1.6°
  "turn|neutral-space|in:contra+contra3|2h": [
    { UpperArm: [-0.178, 0.33, -0.141], LowerArm: [0, -0.242, 0], Hand: [-0.196, -0.134, 1.076] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 1.7°
  "turn|neutral-space|in:contra|1h": [
    { UpperArm: [-0.199, 0.326, -0.242], LowerArm: [0, -0.225, 0], Hand: [-0.302, -0.146, 1.115] },
  ],
  // point 0.02 cm off, palm 1.9°, fingers 6.5°
  "turn|neutral-space|in:up+contra6+in8|2h": [
    { UpperArm: [0.201, 0.327, -0.006], LowerArm: [0, 0.134, 0], Hand: [-1.408, 0.349, 1.109] },
  ],
  // point 0.02 cm off, palm 3.1°, fingers 3.3°
  "turn|neutral-space|in:up+up6|1h": [
    { UpperArm: [0.077, -0.506, 0.483], LowerArm: [0, -0.18, 0], Hand: [-0.848, -0.208, 1.233] },
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
  // point 0.1 cm off, palm 15°, fingers 16.1°
  "turn|neutral-space|out:up+contra6|2h": [
    { UpperArm: [-0.133, 0.398, 0.04], LowerArm: [0, -0.359, 0], Hand: [1.508, -0.326, -1.568] },
  ],
  // point 0.04 cm off, palm 6.9°, fingers 7°
  "turn|neutral-space|out:up+up8|1h": [
    { UpperArm: [-0.25, 0.352, -0.162], LowerArm: [0, -0.104, 0], Hand: [1.321, -0.366, -1.345] },
  ],
  // point 0.09 cm off, palm 13.3°, fingers 13.6°
  "turn|neutral-space|out:up|1h": [
    { UpperArm: [-0.148, 0.268, -0.084], LowerArm: [0, -0.332, 0], Hand: [1.415, -0.277, -1.521] },
  ],
  // point 0.05 cm off, palm 13.8°, fingers 9.6°
  "turn|neutral-space|up:contra|1h": [
    { UpperArm: [-0.173, 0.313, -0.243], LowerArm: [0, -0.189, 0], Hand: [-1.601, -1.171, 0.109] },
  ],
  // point 0.01 cm off, palm 1.7°, fingers 1.3°
  "turn|neutral-space|up:out+contra5|2h": [
    { UpperArm: [0.751, -0.544, 1.18], LowerArm: [0, 0.015, 0], Hand: [-0.467, -0.379, -0.208] },
  ],
  // point 0 cm off, palm 1.4°, fingers 0.6°
  "turn|neutral-space|up:out+out8|2h": [
    { UpperArm: [0.109, -0.932, 0.785], LowerArm: [0, -0.692, 0], Hand: [-0.415, -0.248, -0.082] },
  ],
  // point 0.01 cm off, palm 1.8°, fingers 1.5°
  "turn|neutral-space|up:out|1h": [
    { UpperArm: [0.754, -0.637, 1.109], LowerArm: [0, 0.043, 0], Hand: [-0.524, -0.437, -0.115] },
  ],
  // point 0.01 cm off, palm 2.2°, fingers 1.8°
  "turn|neutral-space|up:out|2h": [
    { UpperArm: [0.709, -0.669, 1.12], LowerArm: [0, 0.052, 0], Hand: [-0.535, -0.513, -0.246] },
  ],
  // point 0.01 cm off, palm 0.8°, fingers 1.6°
  "turn|nose|in:up+out5|1h": [
    { UpperArm: [0.063, 0.276, 0.153], LowerArm: [0, -0.22, 0], Hand: [-0.257, 0.383, -0.17] },
  ],
  // point 0.01 cm off, palm 1.5°, fingers 1°
  "turn|weak-hand|contra:out+down3|1h": [
    { UpperArm: [0.049, -1.027, 0.907], LowerArm: [0, -0.117, 0], Hand: [-0.286, 0.362, -0.363] },
  ],
  // point 0 cm off, palm 1.2°, fingers 0.8°
  "turn|weak-hand|contra:out|1h": [
    { UpperArm: [0.053, -1.087, 0.986], LowerArm: [0, -0.033, 0], Hand: [-0.193, 0.26, -0.298] },
  ],
  // point 0.07 cm off, palm 11.6°, fingers 13.5°
  "turn|weak-hand|contra:up|1h": [
    { UpperArm: [-0.243, -0.265, 0.48], LowerArm: [0, -0.351, 0], Hand: [0.175, 1.169, -1.289] },
  ],
  // point 0.02 cm off, palm 1.1°, fingers 6.8°
  "turn|weak-hand|down:contra+down3|1h": [
    { UpperArm: [0.174, 0.144, -0.228], LowerArm: [0, -0.224, 0], Hand: [0.018, 1.048, -0.202] },
  ],
  // point 0.02 cm off, palm 0.5°, fingers 6.9°
  "turn|weak-hand|down:contra|1h": [
    { UpperArm: [0.015, 0.037, -0.099], LowerArm: [0, -0.136, 0], Hand: [-0.019, 1.048, -0.046] },
  ],
  // point 0 cm off, palm 0.5°, fingers 1.4°
  "turn|weak-hand|down:out+down2|1h": [
    { UpperArm: [-0.086, -0.035, 0.213], LowerArm: [0, -0.086, 0], Hand: [0.1, -0.473, -0.052] },
  ],
  // point 0 cm off, palm 0.4°, fingers 1.4°
  "turn|weak-hand|down:out+down3|1h": [
    { UpperArm: [-0.08, -0.05, 0.242], LowerArm: [0, -0.117, 0], Hand: [0.113, -0.449, -0.083] },
  ],
  // point 0 cm off, palm 0.6°, fingers 1.6°
  "turn|weak-hand|down:out|1h": [
    { UpperArm: [-0.103, -0.004, 0.156], LowerArm: [0, -0.032, 0], Hand: [0.07, -0.517, 0.006] },
  ],
  // point 0.04 cm off, palm 4.9°, fingers 11.3°
  "turn|weak-hand|in:down+down2|1h": [
    { UpperArm: [-0.251, 0.041, 0.178], LowerArm: [0, -0.212, 0], Hand: [-0.304, -0.446, 1.261] },
  ],
  // point 0.09 cm off, palm 9.2°, fingers 24°
  "turn|weak-hand|in:down+up4|1h": [
    { UpperArm: [-0.4, -0.182, 0.289], LowerArm: [0, -0.08, 0], Hand: [-0.237, -0.517, 1.333] },
  ],
  // point 0.01 cm off, palm 3.6°, fingers 3.8°
  "turn|weak-hand|ipsi:out|1h": [
    { UpperArm: [0.014, 0.15, -0.071], LowerArm: [0, -0.026, 0], Hand: [1.465, 0.451, 1.182] },
  ],
  // point 0.01 cm off, palm 1.4°, fingers 2.7°
  "turn|weak-hand|up:contra+down14|1h": [
    { UpperArm: [-0.06, -1.544, 0.887], LowerArm: [0, -0.908, 0], Hand: [-0.558, -0.492, 1] },
  ],
  // point 0.06 cm off, palm 6.5°, fingers 0.4°
  "turn|weak-hand|up:out+down2|1h": [
    { UpperArm: [0.055, -1.06, 0.942], LowerArm: [0, -0.092, 0], Hand: [-1.622, 0.91, -0.238] },
  ],
};

/** How close each fit came. */
export const FITTED_NOTES = {
  "path|cheek|contra:up+ipsi4|1h|arc:out": "worst point 0 cm off, palm 0.2°, fingers 0.9°",
  "path|cheek|contra:up|1h|arc:out": "worst point 0 cm off, palm 0.2°, fingers 1.1°",
  "path|cheek|in:up|1h|linear:out": "worst point 0 cm off, palm 0.6°, fingers 0.6°",
  "path|cheek|in:up|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.3°",
  "path|chest-front|contra:out+ipsi4|2h|linear:down": "worst point 0 cm off, palm 0.1°, fingers 1.3°",
  "path|chest|contra:up|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.1°",
  "path|chest|down:in+contra|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.2°",
  "path|chest|in:contra+ipsi4|2h|linear:out": "worst point 0 cm off, palm 0.2°, fingers 0.1°",
  "path|chest|in:up|1h|linear:out": "worst point 0 cm off, palm 0.3°, fingers 0.4°",
  "path|chin|contra:up|1h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|chin|contra:up|1h|tap": "worst point 0 cm off, palm 0.2°, fingers 0.3°",
  "path|chin|in:contra|1h|tap": "worst point 0 cm off, palm 0.8°, fingers 0.4°",
  "path|chin|in:up|1h|linear:out+down": "worst point 0.01 cm off, palm 1.8°, fingers 1.1°",
  "path|eye|in:up+down2|1h|linear:out": "worst point 0 cm off, palm 0.5°, fingers 0.6°",
  "path|eye|in:up+down2|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|forehead|contra:out+out8+ipsi7+up2|2h|linear:out": "worst point 0.01 cm off, palm 1.8°, fingers 2.4°",
  "path|forehead|contra:up|1h|tap": "worst point 0 cm off, palm 0.1°, fingers 0.4°",
  "path|forehead|out:up+contra+ipsi5|1h|linear:out+ipsi": "worst point 0 cm off, palm 0.7°, fingers 1°",
  "path|head|out:up+ipsi8+out8|2h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|mouth|in:up+out4|1h|linear:out+down": "worst point 0.01 cm off, palm 0.5°, fingers 0.7°",
  "path|mouth|in:up+out4|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|mouth|in:up|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|neutral-space-high|out:up|1h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|neutral-space|contra+down:up+contra+contra4|2h|twist": "worst point 0 cm off, palm 0.2°, fingers 0.1°",
  "path|neutral-space|contra:out+contra6|2h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|neutral-space|contra:out|2h|linear:out": "worst point 0.01 cm off, palm 0°, fingers 0.8°",
  "path|neutral-space|contra:up+contra5|2h|twist": "worst point 0 cm off, palm 0.3°, fingers 0.1°",
  "path|neutral-space|contra:up+contra6|2h|linear:ipsi": "worst point 0 cm off, palm 2°, fingers 0.3°",
  "path|neutral-space|down:out+contra4|2h|linear:ipsi": "worst point 0 cm off, palm 0.6°, fingers 1°",
  "path|neutral-space|down:out+contra6|2h|linear:ipsi": "worst point 0 cm off, palm 0.8°, fingers 1.1°",
  "path|neutral-space|down:out|1h|linear:down": "worst point 0 cm off, palm 0.6°, fingers 0.6°",
  "path|neutral-space|down:out|1h|linear:out": "worst point 0.01 cm off, palm 0.5°, fingers 0.7°",
  "path|neutral-space|down:out|1h|linear:out+ipsi": "worst point 0 cm off, palm 0.2°, fingers 0.8°",
  "path|neutral-space|down:out|1h|nod": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|neutral-space|down:out|2h|linear:ipsi": "worst point 0 cm off, palm 0.5°, fingers 1°",
  "path|neutral-space|down:out|2h|linear:out": "worst point 0.01 cm off, palm 0.4°, fingers 0.5°",
  "path|neutral-space|down:out|2h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|neutral-space|in:contra+contra3|2h|linear:up": "worst point 0 cm off, palm 0.7°, fingers 0.3°",
  "path|neutral-space|in:up|2h|linear:up": "worst point 0 cm off, palm 0.5°, fingers 0.5°",
  "path|neutral-space|out:up+contra4|2h|linear:out+ipsi": "worst point 0.01 cm off, palm 0.9°, fingers 0.7°",
  "path|neutral-space|out:up+contra5+down3+in2|1h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|neutral-space|out:up+contra6|2h|twist": "worst point 0 cm off, palm 0°, fingers 0.1°",
  "path|neutral-space|out:up+up8|1h|linear:contra": "worst point 0 cm off, palm 0.4°, fingers 0°",
  "path|neutral-space|out:up|1h|linear:out": "worst point 0.57 cm off, palm 16.1°, fingers 16.4°",
  "path|neutral-space|out:up|1h|nod": "worst point 0 cm off, palm 0°, fingers 0°",
  "path|neutral-space|up:out|2h|linear:down": "worst point 0 cm off, palm 0.5°, fingers 0.5°",
  "path|neutral-space|up:out|2h|linear:ipsi": "worst point 0 cm off, palm 0.2°, fingers 0.6°",
  "path|neutral-space|up:out|2h|linear:out": "worst point 0.01 cm off, palm 0.7°, fingers 0.7°",
  "path|neutral-space|up:out|2h|linear:up": "worst point 0 cm off, palm 0.4°, fingers 0.5°",
  "path|weak-hand|contra:out+down3|1h|linear:up": "worst point 0 cm off, palm 0.3°, fingers 0.7°",
  "path|weak-hand|contra:out|1h|twist": "worst point 0 cm off, palm 0.1°, fingers 0°",
  "path|weak-hand|down:contra+down3|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|weak-hand|down:contra|1h|linear:down": "worst point 0.01 cm off, palm 3.5°, fingers 1.3°",
  "path|weak-hand|down:contra|1h|linear:out": "worst point 0.03 cm off, palm 1°, fingers 2.8°",
  "path|weak-hand|down:contra|1h|tap": "worst point 0 cm off, palm 0.5°, fingers 0.3°",
  "path|weak-hand|down:out+down2|1h|linear:out": "worst point 0.01 cm off, palm 0.5°, fingers 0.7°",
  "path|weak-hand|down:out+down3|1h|linear:out": "worst point 0 cm off, palm 0.7°, fingers 0.7°",
  "path|weak-hand|down:out|1h|tap": "worst point 0 cm off, palm 0.4°, fingers 0.2°",
  "path|weak-hand|in:down+up4|1h|linear:out": "worst point 0.13 cm off, palm 3.9°, fingers 6.9°",
  "path|weak-hand|ipsi:out|1h|tap": "worst point 0 cm off, palm 0.3°, fingers 0.2°",
  "path|weak-hand|up:contra+down14|1h|tap": "worst point 0 cm off, palm 0.5°, fingers 0.2°",
  "site|cheek|contra:up|A|thumb|1h": "point 0.01 cm off, palm 0.4°, fingers 1.2°",
  "site|cheek|in:up|flat_o|fingertips|1h": "point 0 cm off, palm 0.3°, fingers 0.7°",
  "site|cheek|in:up|open_b|palm|1h": "point 0.09 cm off, palm 0.7°, fingers 2°",
  "site|chest-front|contra:out|A|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|chest|contra:up|5|thumb|1h": "point 0.03 cm off, palm 2.5°, fingers 4.8°",
  "site|chest|contra:up|curved_5|thumb|1h": "point 0.03 cm off, palm 2.5°, fingers 4.8°",
  "site|chest|in:contra+ipsi4|C|fingertips|2h": "point 0 cm off, palm 0.2°, fingers 0.3°",
  "site|chest|in:contra|C|fingertips|2h": "point 0 cm off, palm 0.1°, fingers 0.3°",
  "site|chest|in:up|open_b|palm|1h": "point 0.01 cm off, palm 0.8°, fingers 1.3°",
  "site|chest|up:in|C|fingertips|2h": "point 0.02 cm off, palm 2.1°, fingers 1.3°",
  "site|chin|contra:up|5|thumb|1h": "point 0.01 cm off, palm 0.9°, fingers 1°",
  "site|chin|contra:up|A|thumb|1h": "point 0.01 cm off, palm 0.7°, fingers 1.2°",
  "site|chin|contra:up|F|index|1h": "point 0.02 cm off, palm 1.2°, fingers 2.7°",
  "site|chin|contra:up|L|thumb|1h": "point 0.01 cm off, palm 1°, fingers 1°",
  "site|chin|in:contra|Y|fingertips|1h": "point 0.02 cm off, palm 4.5°, fingers 2.8°",
  "site|chin|in:up|open_b|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|eye|in:up+down2|V|index|1h": "point 0 cm off, palm 0.4°, fingers 1°",
  "site|forehead|contra:up|5|thumb|1h": "point 0 cm off, palm 0.8°, fingers 1°",
  "site|head|in:up+contra|B|fingertips|1h": "point 0.01 cm off, palm 1.8°, fingers 2.9°",
  "site|head|in:up+contra|flat_o|fingertips|1h": "point 0 cm off, palm 0.4°, fingers 0.3°",
  "site|head|in:up+contra|open_b|fingertips|1h": "point 0 cm off, palm 0.3°, fingers 0.5°",
  "site|mouth|contra:out+up|C|thumb|1h": "point 0.06 cm off, palm 2.7°, fingers 4.5°",
  "site|mouth|contra:out|C|thumb|1h": "point 0.13 cm off, palm 11.1°, fingers 10°",
  "site|mouth|in:up|flat_o|fingertips|1h": "point 0 cm off, palm 0.4°, fingers 0.5°",
  "site|neutral-space-high|in:up|Y|fingertips|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|neutral-space-high|out:up|open_b|fingertips|1h": "point 0 cm off, palm 0.6°, fingers 0.6°",
  "site|weak-hand|contra:out+down3|A|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.2°",
  "site|weak-hand|contra:out|S|pinky-side|1h": "point 0 cm off, palm 0.1°, fingers 0.2°",
  "site|weak-hand|contra:up|C|fingertips|1h": "point 0.01 cm off, palm 2.4°, fingers 3.8°",
  "site|weak-hand|down:contra+down3|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|weak-hand|down:contra|1|index|1h": "point 0.01 cm off, palm 1.4°, fingers 1.9°",
  "site|weak-hand|down:contra|bent_b|fingertips|1h": "point 0.01 cm off, palm 1.3°, fingers 1.1°",
  "site|weak-hand|down:contra|open_b|palm|1h": "point 0 cm off, palm 0.2°, fingers 0.1°",
  "site|weak-hand|down:out+down2|5|fingertips|1h": "point 0.01 cm off, palm 1.7°, fingers 0.6°",
  "site|weak-hand|down:out+down2|K|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|down:out+down2|flat_b|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|down:out+down2|flat_o|fingertips|1h": "point 0.01 cm off, palm 3°, fingers 1.3°",
  "site|weak-hand|down:out+down2|open_b|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|down:out+down3|1|index|1h": "point 0.03 cm off, palm 2.9°, fingers 4.2°",
  "site|weak-hand|down:out|S|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|down:out|X|index|1h": "point 0.08 cm off, palm 5.4°, fingers 8.9°",
  "site|weak-hand|down:out|open_b|palm|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|in:down+down2|bent_b|fingertips|1h": "point 0.14 cm off, palm 11°, fingers 10.2°",
  "site|weak-hand|ipsi:out|A|thumb|1h": "point 0 cm off, palm 0.4°, fingers 0.3°",
  "site|weak-hand|up:out+down2|K|back|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "site|weak-hand|up:out+down2|open_b|back|1h": "point 0 cm off, palm 0.1°, fingers 0.1°",
  "turn|base-hand|contra:out|1h": "point 0.01 cm off, palm 1°, fingers 2.8°",
  "turn|base-hand|contra:up|1h": "point 0.13 cm off, palm 30.1°, fingers 26.3°",
  "turn|base-hand|down:contra|1h": "point 0.11 cm off, palm 23.2°, fingers 28.6°",
  "turn|base-hand|down:out|1h": "point 0.06 cm off, palm 19.7°, fingers 5.4°",
  "turn|base-hand|out:up|1h": "point 0.09 cm off, palm 27.3°, fingers 3.1°",
  "turn|base-hand|up:out|1h": "point 0.01 cm off, palm 0.9°, fingers 1.4°",
  "turn|cheek|contra:in+up+up2+ipsi2|1h": "point 0.01 cm off, palm 1.6°, fingers 1.7°",
  "turn|cheek|contra:up+ipsi4+out2|1h": "point 0.04 cm off, palm 1.7°, fingers 5.3°",
  "turn|cheek|contra:up+ipsi4|1h": "point 0.05 cm off, palm 1.8°, fingers 9.4°",
  "turn|cheek|contra:up|1h": "point 0.03 cm off, palm 2.7°, fingers 6.7°",
  "turn|cheek|in:up|1h": "point 0.02 cm off, palm 2.1°, fingers 4.3°",
  "turn|chest-front|contra:out+ipsi4|2h": "point 0.01 cm off, palm 2.4°, fingers 3.1°",
  "turn|chest-front|contra:out|1h": "point 0.03 cm off, palm 4.4°, fingers 5.5°",
  "turn|chest-front|in:contra+in2|1h": "point 0.01 cm off, palm 0.6°, fingers 2.7°",
  "turn|chest-front|in:up+contra+in5|1h": "point 0.07 cm off, palm 1.5°, fingers 1.5°",
  "turn|chest|contra:up|1h": "point 0.15 cm off, palm 30.4°, fingers 12.4°",
  "turn|chest|down:in+contra|1h": "point 0.02 cm off, palm 3.2°, fingers 2°",
  "turn|chest|in:contra+contra12+up6+out3|1h": "point 0.01 cm off, palm 2°, fingers 3.3°",
  "turn|chest|in:contra+contra12+up6|1h": "point 0.01 cm off, palm 2.1°, fingers 3.7°",
  "turn|chest|in:contra+contra9+out3|1h": "point 0 cm off, palm 1°, fingers 2.9°",
  "turn|chest|in:contra+contra9|1h": "point 0.01 cm off, palm 1.8°, fingers 2.9°",
  "turn|chest|in:contra+ipsi4|2h": "point 0.01 cm off, palm 2.3°, fingers 3.8°",
  "turn|chest|in:contra|2h": "point 0.01 cm off, palm 1.8°, fingers 3.4°",
  "turn|chest|in:up|1h": "point 0.04 cm off, palm 3.7°, fingers 4°",
  "turn|chest|up:in|2h": "point 0.24 cm off, palm 21.4°, fingers 23.5°",
  "turn|chin|contra:in+up|1h": "point 0.03 cm off, palm 6.1°, fingers 2.7°",
  "turn|chin|contra:up|1h": "point 0.04 cm off, palm 5.4°, fingers 4.1°",
  "turn|chin|in:contra|1h": "point 0.08 cm off, palm 11.9°, fingers 25.1°",
  "turn|chin|in:up+down3|1h": "point 0.02 cm off, palm 1.5°, fingers 1.6°",
  "turn|chin|in:up+out4|1h": "point 0.01 cm off, palm 0.3°, fingers 2.1°",
  "turn|chin|in:up|1h": "point 0.01 cm off, palm 0.8°, fingers 1.9°",
  "turn|eye|in:up+down2|1h": "point 0.03 cm off, palm 2°, fingers 5.1°",
  "turn|forehead|contra:out+out8+ipsi7+up2|2h": "point 0.15 cm off, palm 6.3°, fingers 36.3°",
  "turn|forehead|contra:up|1h": "point 0.02 cm off, palm 3.4°, fingers 3.8°",
  "turn|forehead|down:out+out10+up2|1h": "point 0.21 cm off, palm 22.4°, fingers 36.1°",
  "turn|forehead|out:up+contra+ipsi5|1h": "point 0.05 cm off, palm 15.7°, fingers 3.9°",
  "turn|head|contra:up+ipsi4+out2|1h": "point 0 cm off, palm 1°, fingers 0.6°",
  "turn|head|in:up+contra|1h": "point 0.04 cm off, palm 7.5°, fingers 8.9°",
  "turn|head|out:up+ipsi8+out8|2h": "point 0.01 cm off, palm 4.6°, fingers 1.7°",
  "turn|mouth|contra:out+up|1h": "point 0.13 cm off, palm 1.1°, fingers 16.3°",
  "turn|mouth|contra:out|1h": "point 0.26 cm off, palm 5°, fingers 48.8°",
  "turn|mouth|in:up+out4|1h": "point 0.01 cm off, palm 0.9°, fingers 1.4°",
  "turn|mouth|in:up|1h": "point 0.01 cm off, palm 1.2°, fingers 1.7°",
  "turn|neutral-space-high|contra:up|1h": "point 0.01 cm off, palm 0.5°, fingers 2°",
  "turn|neutral-space-high|in:up|1h": "point 0.01 cm off, palm 2.9°, fingers 1.5°",
  "turn|neutral-space-high|out:up|1h": "point 0.01 cm off, palm 3.4°, fingers 2.1°",
  "turn|neutral-space|contra+down:up+contra+contra4|2h": "point 0.04 cm off, palm 5.3°, fingers 11.8°",
  "turn|neutral-space|contra:out+contra6|2h": "point 0 cm off, palm 0.8°, fingers 1°",
  "turn|neutral-space|contra:out+contra8.5|2h": "point 0 cm off, palm 1°, fingers 1°",
  "turn|neutral-space|contra:out|1h": "point 0 cm off, palm 0.5°, fingers 1°",
  "turn|neutral-space|contra:out|2h": "point 0 cm off, palm 0.5°, fingers 1°",
  "turn|neutral-space|contra:up+contra5|2h": "point 0.06 cm off, palm 6.2°, fingers 17.7°",
  "turn|neutral-space|contra:up+contra6|2h": "point 0.07 cm off, palm 6°, fingers 18.3°",
  "turn|neutral-space|down:out+contra4|2h": "point 0.01 cm off, palm 3.7°, fingers 1.8°",
  "turn|neutral-space|down:out+contra6|2h": "point 0.01 cm off, palm 3.6°, fingers 1.8°",
  "turn|neutral-space|down:out|1h": "point 0.01 cm off, palm 3.6°, fingers 1.8°",
  "turn|neutral-space|down:out|2h": "point 0.01 cm off, palm 3.8°, fingers 1.5°",
  "turn|neutral-space|in:contra+contra3|2h": "point 0.01 cm off, palm 1.7°, fingers 1.6°",
  "turn|neutral-space|in:contra|1h": "point 0.01 cm off, palm 1.8°, fingers 1.7°",
  "turn|neutral-space|in:up+contra6+in8|2h": "point 0.02 cm off, palm 1.9°, fingers 6.5°",
  "turn|neutral-space|in:up+up6|1h": "point 0.02 cm off, palm 3.1°, fingers 3.3°",
  "turn|neutral-space|in:up+up8|1h": "point 0.01 cm off, palm 2.3°, fingers 2.3°",
  "turn|neutral-space|in:up|1h": "point 0.05 cm off, palm 7.2°, fingers 7.6°",
  "turn|neutral-space|in:up|2h": "point 0.03 cm off, palm 5.5°, fingers 5.5°",
  "turn|neutral-space|out:up+contra4|2h": "point 0.1 cm off, palm 15°, fingers 15.5°",
  "turn|neutral-space|out:up+contra5+down3+in2|1h": "point 0.11 cm off, palm 14.7°, fingers 17.3°",
  "turn|neutral-space|out:up+contra6|2h": "point 0.1 cm off, palm 15°, fingers 16.1°",
  "turn|neutral-space|out:up+up8|1h": "point 0.04 cm off, palm 6.9°, fingers 7°",
  "turn|neutral-space|out:up|1h": "point 0.09 cm off, palm 13.3°, fingers 13.6°",
  "turn|neutral-space|up:contra|1h": "point 0.05 cm off, palm 13.8°, fingers 9.6°",
  "turn|neutral-space|up:out+contra5|2h": "point 0.01 cm off, palm 1.7°, fingers 1.3°",
  "turn|neutral-space|up:out+out8|2h": "point 0 cm off, palm 1.4°, fingers 0.6°",
  "turn|neutral-space|up:out|1h": "point 0.01 cm off, palm 1.8°, fingers 1.5°",
  "turn|neutral-space|up:out|2h": "point 0.01 cm off, palm 2.2°, fingers 1.8°",
  "turn|nose|in:up+out5|1h": "point 0.01 cm off, palm 0.8°, fingers 1.6°",
  "turn|weak-hand|contra:out+down3|1h": "point 0.01 cm off, palm 1.5°, fingers 1°",
  "turn|weak-hand|contra:out|1h": "point 0 cm off, palm 1.2°, fingers 0.8°",
  "turn|weak-hand|contra:up|1h": "point 0.07 cm off, palm 11.6°, fingers 13.5°",
  "turn|weak-hand|down:contra+down3|1h": "point 0.02 cm off, palm 1.1°, fingers 6.8°",
  "turn|weak-hand|down:contra|1h": "point 0.02 cm off, palm 0.5°, fingers 6.9°",
  "turn|weak-hand|down:out+down2|1h": "point 0 cm off, palm 0.5°, fingers 1.4°",
  "turn|weak-hand|down:out+down3|1h": "point 0 cm off, palm 0.4°, fingers 1.4°",
  "turn|weak-hand|down:out|1h": "point 0 cm off, palm 0.6°, fingers 1.6°",
  "turn|weak-hand|in:down+down2|1h": "point 0.04 cm off, palm 4.9°, fingers 11.3°",
  "turn|weak-hand|in:down+up4|1h": "point 0.09 cm off, palm 9.2°, fingers 24°",
  "turn|weak-hand|ipsi:out|1h": "point 0.01 cm off, palm 3.6°, fingers 3.8°",
  "turn|weak-hand|up:contra+down14|1h": "point 0.01 cm off, palm 1.4°, fingers 2.7°",
  "turn|weak-hand|up:out+down2|1h": "point 0.06 cm off, palm 6.5°, fingers 0.4°",
};
