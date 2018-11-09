import {
  App,
  DefineModule,
  ElementModule,
  OrbitControlsModule,
  PerspectiveCamera,
  Plane,
  RenderingModule,
  SceneModule
} from 'whs'

const app = new App([
  new ElementalModule({
    container: document.getElementById('app')
  }),
  new SceneModule(),
  new CameraModule({
    position: {
      z: -15
    }
  }),
  new RenderingModule({bgColor: 0x000001}),
  new OrbitModule()
])

app.start()
