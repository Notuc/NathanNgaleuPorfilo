import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

const textureLoader = new THREE.TextureLoader()

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const backgroundGroundtexture = textureLoader.load('./images/ilya-pavlov-OqtafYT5kTw-unsplash(1).jpg')
scene.background = backgroundGroundtexture

//Light
const light = new THREE.PointLight()
light.position.set(1.0, 1.4, 1.0)
scene.add(light)
const light2 = new THREE.AmbientLight(0xffff, 0.5)
scene.add(light2)

//mac textures
const mactext = textureLoader.load('./textures/mac.jpg')
mactext.flipY = false
mactext.wrapS = THREE.RepeatWrapping
mactext.wrapT = THREE.RepeatWrapping
const macTexture = new THREE.MeshBasicMaterial({map: mactext})

//gundam spearstextures
const gundamspeartext = textureLoader.load('./textures/gundamspear.jpg')
gundamspeartext.flipY = false
gundamspeartext.wrapS = THREE.RepeatWrapping
gundamspeartext.wrapT = THREE.RepeatWrapping
const gundamspeartexture = new THREE.MeshBasicMaterial({map: gundamspeartext})

//wood textures
const woodtext = textureLoader.load('./textures/floor.jpg')
woodtext.flipY = false
woodtext.wrapS = THREE.RepeatWrapping
woodtext.wrapT = THREE.RepeatWrapping
//Wood Texture loader
const woodenfloorTexture = new THREE.MeshBasicMaterial({map: woodtext})

//tv textures
const tvtext = textureLoader.load('./textures/tv.jpg')
tvtext.flipY = false
tvtext.wrapS = THREE.RepeatWrapping
tvtext.wrapT = THREE.RepeatWrapping
//tv Texture loader
const tvTexture = new THREE.MeshBasicMaterial({map: tvtext})


//Wall textures for back wall
const walltextback = textureLoader.load('./textures/bacwall.jpg')
walltextback.flipY = false
walltextback.wrapS = THREE.RepeatWrapping
walltextback.wrapT = THREE.RepeatWrapping
const backwallTexture = new THREE.MeshBasicMaterial({map: walltextback})

//starwars textures
const starwastext = textureLoader.load('./textures/outerhelmet.jpg')
starwastext.flipY = false
starwastext.wrapS = THREE.RepeatWrapping
starwastext.wrapT = THREE.RepeatWrapping
const starwastexture = new THREE.MeshBasicMaterial({map: starwastext})

//Wall textures for left wall
const walltextleft = textureLoader.load('./textures/leftwall.jpg')
walltextleft.flipY = false
walltextleft.wrapS = THREE.RepeatWrapping
walltextleft.wrapT = THREE.RepeatWrapping
const leftwallTexture = new THREE.MeshBasicMaterial({map: walltextleft})

// textures for couch
const couchtext = textureLoader.load('./textures/newcouchuvs.jpg')
couchtext.flipY = false
couchtext.wrapS = THREE.RepeatWrapping
couchtext.wrapT = THREE.RepeatWrapping
const couchtexture = new THREE.MeshBasicMaterial({map: couchtext})

//textures for desksetup
const desksetuptext = textureLoader.load('./textures/improveddesksetup.jpg')
desksetuptext.flipY = false
desksetuptext.wrapS = THREE.RepeatWrapping
desksetuptext.wrapT = THREE.RepeatWrapping
desksetuptext.repeat.set(1,1)
const desksetuptexture = new THREE.MeshBasicMaterial({map: desksetuptext})

//textures for mainmonitor
const mainmonitortext = textureLoader.load('./textures/Mainmonitorcode.jpg')
mainmonitortext.flipY = false
mainmonitortext.wrapS = THREE.RepeatWrapping
mainmonitortext.wrapT = THREE.RepeatWrapping
mainmonitortext.repeat.set(1,1)
const mainmonitortexture = new THREE.MeshBasicMaterial({map: mainmonitortext})

//textures for mainmonitor
const tvstandtext = textureLoader.load('./textures/tvstand.jpg')
tvstandtext.flipY = false
tvstandtext.wrapS = THREE.RepeatWrapping
tvstandtext.wrapT = THREE.RepeatWrapping
tvstandtext.repeat.set(1,1)
const tvstandtexttexture = new THREE.MeshBasicMaterial({map: tvstandtext})

//shelf
const selftext = textureLoader.load('./textures/wallmount.jpg')
selftext.flipY = false
selftext.wrapS = THREE.RepeatWrapping
selftext.wrapT = THREE.RepeatWrapping
selftext.repeat.set(1,1)
const shelftexture = new THREE.MeshBasicMaterial({map: selftext})

//carpet
const carpettext = textureLoader.load('./textures/carpet.png')
carpettext.flipY = false
carpettext.wrapS = THREE.RepeatWrapping
carpettext.wrapT = THREE.RepeatWrapping
carpettext.repeat.set(1,1)
const carpettexture = new THREE.MeshBasicMaterial({map: carpettext})

//table legs textures
const legtext = textureLoader.load('./textures/tablelegs.jpg')
legtext.flipY = false
legtext.wrapS = THREE.RepeatWrapping
legtext.wrapT = THREE.RepeatWrapping
legtext.repeat.set(1,1)
const tablelegtexture = new THREE.MeshBasicMaterial({map: legtext})



//table top textures
const tabletext = textureLoader.load('./textures/toptable.jpg')
tabletext.flipY = false
tabletext.wrapS = THREE.RepeatWrapping
tabletext.wrapT = THREE.RepeatWrapping
tabletext.repeat.set(1,1)
const tabletexture = new THREE.MeshBasicMaterial({map: tabletext})

//piggyleft
const leftpiggytext = textureLoader.load('./textures/leftpiggy.jpg')
leftpiggytext.flipY = false
leftpiggytext.wrapS = THREE.RepeatWrapping
leftpiggytext.wrapT = THREE.RepeatWrapping
leftpiggytext.repeat.set(1,1)
const leftpiggytexture = new THREE.MeshBasicMaterial({map: leftpiggytext})

//piggy right
const rightpiggytext = textureLoader.load('./textures/rightpiggy.jpg')
rightpiggytext.flipY = false
rightpiggytext.wrapS = THREE.RepeatWrapping
rightpiggytext.wrapT = THREE.RepeatWrapping
rightpiggytext.repeat.set(1,1)
const rightpiggytexture = new THREE.MeshBasicMaterial({map: rightpiggytext})

//bottombook
const bottomslabtext = textureLoader.load('./textures/bottomslab.jpg')
bottomslabtext.flipY = false
bottomslabtext.wrapS = THREE.RepeatWrapping
bottomslabtext.wrapT = THREE.RepeatWrapping
bottomslabtext.repeat.set(1,1)
const bottomslabtexture = new THREE.MeshBasicMaterial({map: bottomslabtext})

//topbook
const topslabtext = textureLoader.load('./textures/topslab.jpg')
topslabtext.flipY = false
topslabtext.wrapS = THREE.RepeatWrapping
topslabtext.wrapT = THREE.RepeatWrapping
topslabtext.repeat.set(1,1)
const topslabtexture = new THREE.MeshBasicMaterial({map: topslabtext})

//leftspeaker
const leftspeakertext = textureLoader.load('./textures/leftspeakerright.jpg')
leftspeakertext.flipY = false
leftspeakertext.wrapS = THREE.RepeatWrapping
leftspeakertext.wrapT = THREE.RepeatWrapping
leftspeakertext.repeat.set(1,1)
const  leftspeakertexture = new THREE.MeshBasicMaterial({map:  leftspeakertext})

//topbook
const speakerrighttext = textureLoader.load('./textures/speakerright.jpg')
speakerrighttext.flipY = false
speakerrighttext.wrapS = THREE.RepeatWrapping
speakerrighttext.wrapT = THREE.RepeatWrapping
speakerrighttext.repeat.set(1,1)
const speakerrighttexture = new THREE.MeshBasicMaterial({map: speakerrighttext})

//soccer
const soccertext = textureLoader.load('./textures/soccer.jpg')
soccertext.flipY = false
soccertext.wrapS = THREE.RepeatWrapping
soccertext.wrapT = THREE.RepeatWrapping
soccertext.repeat.set(1,1)
const soccertexture = new THREE.MeshBasicMaterial({map: soccertext})

//plant
const planttext = textureLoader.load('./textures/planttexture.jpg')
planttext.flipY = false
planttext.wrapS = THREE.RepeatWrapping
planttext.wrapT = THREE.RepeatWrapping
planttext.repeat.set(1,1)
const planttexture = new THREE.MeshBasicMaterial({map:planttext})

//arcade
const arcadetext= textureLoader.load('./textures/arcade.jpg')
arcadetext.flipY = false
arcadetext.wrapS = THREE.RepeatWrapping
arcadetext.wrapT = THREE.RepeatWrapping
arcadetext.repeat.set(1,1)
const arcadetexture = new THREE.MeshBasicMaterial({map:arcadetext})


//vertical monitor
const verticaltext= textureLoader.load('./textures/virticalmonitor.jpg')
verticaltext.flipY = false
verticaltext.wrapS = THREE.RepeatWrapping
verticaltext.wrapT = THREE.RepeatWrapping
verticaltext.repeat.set(1,1)
const verticaltexture = new THREE.MeshBasicMaterial({map:verticaltext})

//arcade
const arcadestickertext= textureLoader.load('./textures/arcadesticker.png')
arcadestickertext.flipY = false
arcadestickertext.wrapS = THREE.RepeatWrapping
arcadestickertext.wrapT = THREE.RepeatWrapping
arcadestickertext.repeat.set(1,1)
const arcadestickertexture = new THREE.MeshBasicMaterial({map:arcadestickertext})

const arcadejoysticktext= textureLoader.load('./textures/arcadejoystick.jpg')
arcadejoysticktext.flipY = false
arcadejoysticktext.wrapS = THREE.RepeatWrapping
arcadejoysticktext.wrapT = THREE.RepeatWrapping
const arcadejoysticktexture = new THREE.MeshBasicMaterial({map:arcadestickertext})

//gundam spear
const speartext= textureLoader.load('./textures/spear.jpg')
speartext.flipY = false
speartext.wrapS = THREE.RepeatWrapping
speartext.wrapT = THREE.RepeatWrapping
const speartexture = new THREE.MeshBasicMaterial({map: speartext})

//katana
const katanatext= textureLoader.load('./textures/katana.jpg')
katanatext.flipY = false
katanatext.wrapS = THREE.RepeatWrapping
katanatext.wrapT = THREE.RepeatWrapping
const katanatexture = new THREE.MeshBasicMaterial({map:katanatext})

//chrismas hat
const uppertext= textureLoader.load('./textures/gundamupper.jpg')
uppertext.flipY = false
uppertext.wrapS = THREE.RepeatWrapping
uppertext.wrapT = THREE.RepeatWrapping
const gundamuppertexture = new THREE.MeshBasicMaterial({map:uppertext})

//lucario
const lucariotext= textureLoader.load('./textures/lucariolegs.jpg')
lucariotext.flipY = false
lucariotext.wrapS = THREE.RepeatWrapping
lucariotext.wrapT = THREE.RepeatWrapping
const lucariotexture = new THREE.MeshBasicMaterial({map:lucariotext})

//lucario
const lucarioearstext= textureLoader.load('./textures/lucarioears.jpg')
lucarioearstext.flipY = false
lucarioearstext.wrapS = THREE.RepeatWrapping
lucarioearstext.wrapT = THREE.RepeatWrapping
const lucarioearstexture = new THREE.MeshBasicMaterial({map:lucarioearstext})

//lucario
const lucariochesttext= textureLoader.load('./textures/lucariochest.jpg')
lucariochesttext.flipY = false
lucariochesttext.wrapS = THREE.RepeatWrapping
lucariochesttext.wrapT = THREE.RepeatWrapping
const lucariochesttexture = new THREE.MeshBasicMaterial({map:lucariochesttext})

//lucario
const lucarioheadtext= textureLoader.load('./textures/lucariohead.jpg')
lucarioheadtext.flipY = false
lucarioheadtext.wrapS = THREE.RepeatWrapping
lucarioheadtext.wrapT = THREE.RepeatWrapping
const lucarioheadtexture = new THREE.MeshBasicMaterial({map:lucarioheadtext})

//lucario
const lucarioballtext= textureLoader.load('./textures/lucarioball.jpg')
lucarioballtext.flipY = false
lucarioballtext.wrapS = THREE.RepeatWrapping
lucarioballtext.wrapT = THREE.RepeatWrapping
const lucarioballtexture = new THREE.MeshBasicMaterial({map:lucarioballtext})

//lucario
const controllertext= textureLoader.load('./textures/controller.jpg')
controllertext.flipY = false
controllertext.wrapS = THREE.RepeatWrapping
controllertext.wrapT = THREE.RepeatWrapping
const controllertexture = new THREE.MeshBasicMaterial({map:controllertext})


let mixer = null


gltfLoader.load(
    './Models/gundamupper.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = gundamuppertexture
        }
        )

        scene.add(gltf.scene);
        
    }
)


gltfLoader.load(
    './Models/gundamspear.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = speartexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
gltfLoader.load(
    './Models/lucarioears.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = lucarioearstexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

gltfLoader.load(
    './Models/lucarioballglb.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = lucarioballtexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
gltfLoader.load(
    './Models/controller.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = controllertexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
gltfLoader.load(
    './Models/lucariolegsandarms.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = lucariotexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
gltfLoader.load(
    './Models/lucariochest.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = lucariochesttexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
gltfLoader.load(
    './Models/lucariohead.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = lucarioheadtexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
gltfLoader.load(
    './Models/mac.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = macTexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

//starwars
gltfLoader.load(
    './Models/katana.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = katanatexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
//gundamlegs
gltfLoader.load(
    './Models/gundampants.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = gundamspeartexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

//starwars
gltfLoader.load(
    './Models/starwars.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = starwastexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
//arcade
gltfLoader.load(
    './Models/arcade.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = arcadetexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
//arcade
gltfLoader.load(
    './Models/aracdejoystick.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material =arcadejoysticktexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
//arcade
gltfLoader.load(
    './Models/arcadesticker.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = arcadestickertexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
//leftspeaker
gltfLoader.load(
    './Models/lefspeaker.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = leftspeakertexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
//plant
gltfLoader.load(
    './Models/plant.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = planttexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

//tv
gltfLoader.load(
    './Models/soccer.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = soccertexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
/*
tv
*/
gltfLoader.load(
    './Models/tvstand.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = tvstandtexttexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
/*
tvstand
*/
gltfLoader.load(
    './Models/tv.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = tvTexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
/*
piggyleft
*/
gltfLoader.load(
    './Models/leftpiggy.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = leftpiggytexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
/*
speakerright
*/
gltfLoader.load(
    './Models/rightspeaker.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = speakerrighttexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
/*
veritcal monitor
*/
gltfLoader.load(
    './Models/veritcalmonitor.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = verticaltexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

/*
piggy right
*/
gltfLoader.load(
    './Models/rightpiggy.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = rightpiggytexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

/*
topbook
*/
gltfLoader.load(
    './Models/topbook.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = topslabtexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
/*
bottombook
*/
gltfLoader.load(
    './Models/bottombook.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = bottomslabtexture
        }
        )

        scene.add(gltf.scene);
        
    }
)


/*
tabletop
*/
gltfLoader.load(
    './Models/tabletop.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = tabletexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

/*
legs of table
*/
gltfLoader.load(
    './Models/legsoftable.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = tablelegtexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

/*
carpet
*/
gltfLoader.load(
    './Models/carpet.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = carpettexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

/*
shelf
*/
gltfLoader.load(
    './Models/shelf.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = shelftexture
        }
        )

        scene.add(gltf.scene);
        
    }
)
/*
mainmonitor 
*/
gltfLoader.load(
    './Models/mainmonitorscreen.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = mainmonitortexture
        }
        )

        scene.add(gltf.scene);
        
    }
)


/*
desksetup 
*/
gltfLoader.load(
    './Models/updateddesk.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = desksetuptexture
        }
        )

        scene.add(gltf.scene);
        
    }
)


/*
floor
*/
gltfLoader.load(
    './Models/newwoodfloor.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = woodenfloorTexture
        }
        )

        scene.add(gltf.scene);
        
    }
)

//backwall
gltfLoader.load(
    './Models/newbackwall.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = backwallTexture
        }
        )
        
        scene.add(gltf.scene);
        
    }
)
//Leftwall
gltfLoader.load(
    './Models/newleftwall.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = leftwallTexture
        }
        )
        
        scene.add(gltf.scene);
        
    }
)

//couch
gltfLoader.load(
    './Models/couch.glb',
    (gltf)=>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = couchtexture
        }
        )
        
        scene.add(gltf.scene);
        
    }
)
const matcapTexture = textureLoader.load('./textures/4.png')
const fontLoader = new FontLoader()
 
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        // Material
        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })

        // Text
        const textGeometry = new TextGeometry(
            '        Hello World !'+'\n to Nathan Ngaleu Porfilo \n            Enjoy !',
            {
                font: font,
                size: 0.4,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
           
        )  
        const text = new THREE.Mesh(textGeometry, material)
            scene.add(text)
            text.rotation.y = 3
            text.position.x = 5.5
            text.position.y = 3
            text.position.z = -1
    }

)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    console.log(camera.position)

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x =4.639007104146336
camera.position.y = 4.249058288733643
camera.position.z = -6.8691167658816426
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
// update mixer

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
    tick()
