# Citations

Keep these with the data. Catalog CC BY does not license the underlying corpora.

- Sehyr, Caselli, Cohen-Goldberg, Emmorey. ASL-LEX 2.0. OSF `osf.io/zpha4`. Files: CC BY 4.0.
- Slevinski / Sutton. SignPuddle Online SPML dumps. SignWriting: CC BY-SA 3.0. Use official `sgn{ID}.spml` URLs.
- Kopf, Schulder, Hanke. Sign Language Dataset Compendium. Catalog: CC BY 4.0. https://doi.org/10.25592/dgs.sldc
- Rudra Sarker. SignLanguage-Dataset-Hub. Catalog: CC BY 4.0. Underlying datasets: their own licenses.
- Crasborn et al. NGT dataset in Global Signbank. Public subset: CC BY 4.0.
- Ranum, Otterspeer, Andersen, Belleman, Roelofsen. 3D-LEX v1.0. CC BY 4.0. Deferred for size.
- Li et al. WLASL. C-UDA; academic/computational; no commercial; videos are third-party YouTube.
- Pavlakos et al. HaMeR. Code: MIT. Requires MANO (`MANO_RIGHT.pkl`). Official: `geopavlakos/hamer`.
- Yang / OpenMMLab. MMPose. Apache-2.0. DWPose (IDEA-Research / MMPose wholebody configs) is the GPU body/face estimator.
- MANO (Max Planck / MTC). Non-commercial scientific research; no redistribution of the model. Check before publishing derived poses.
- Decord (ByteDance / DMLC). Apache-2.0. Frame IO for GPU extract.
- Mentzer et al. Finite Scalar Quantization. lucidrains `vector_quantize_pytorch.FSQ` is the GPU ablation; `python/marionet/fsq.py` is the numpy drop-in. Train only on the pose training split.
- Casiez, Roussel, Vogel. 1€ filter (CHI 2012). Finger-euler smoother after compile; not a residual that copies HaMeR.
- `@pixiv/three-vrm`. Playback. MarionetClip JSON is applied to normalized humanoid bones; `.vrma` is not the portable artifact.
- Jillani et al. Fast-HaMeR. Distilled HaMeR student (MobileNet/…). Allowed 21-joint drop-in on the GPU box; not a second pose schema. `hunainahmedj/Fast-HaMeR`.
- Kalidokit. MediaPipe Holistic → VRM live kinematics. Related-work baseline for B, not the DWPose/HaMeR solver.
- M3T / SignMask / SeRV. Sign motion tokenizers (FSQ-VAE / SMPL-X / RVQ). Related work for the FSQ ablation, not a dependency.
- SLP-AA (Sign Language Phonetic Annotator+Analyzer). Phonetic transcription GUI. E2r tool, not `predict_signdesc`.
- DFKI MMS-Player. Avatar synthesis from authored MMS. Related to JASigning (structured input, no video induction).
- Moryossef et al. pose-format (`sign-language-processing/pose`). `.pose` container. Converter: `python/marionet/pose_interop.py`. Not the Marionet IR.
- pose-evaluation (`sign-language-processing/pose-evaluation`). DTW / keypoint-distance for E1/E3 automatic half. Cite; do not take GPLv3 `dtw-python`.
- sign-language-processing/transcription. HamNoSys / SignWriting export is a later linguist-facing view of `SignDesc`, not the compiler.
- KalidoKit (`yeemachine/kalidokit`, MIT, **deprecated**). MediaPipe→VRM prior art. Not a dependency.
- WiLoR. CC-BY-NC-ND + Ultralytics AGPL. License-gate skip.

Ingest rules: `dataingestplan.md`.
