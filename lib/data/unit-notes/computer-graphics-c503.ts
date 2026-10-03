import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Computer Graphics (C-503)
// B.C.A. Fifth Semester — Dr. Bhimrao Ambedkar University, Agra.
// Source basis: the uploaded DBRAU detailed syllabus image.
export const computerGraphicsC503UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Computer Graphics and Display Devices",
    hours: 8,
    headings: [
      {
        id: "computer-graphics-introduction",
        title: "1. Concept of Computer Graphics",
        icon: "Monitor",
        blocks: [
          {
            kind: "paragraph",
            text: "Computer Graphics is the field concerned with the creation, representation, manipulation and display of visual information using computers. It includes techniques for generating images, geometric objects, diagrams, animation and interactive visual interfaces. In a computer-graphics system, geometric or image data is processed and converted into a form that can be displayed on an output device."
          },
          {
            kind: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Graphics", "Visual representation of information using geometric shapes, images, text or rendered scenes."],
              ["Rendering", "Process of producing a displayable image from scene or graphical data."],
              ["Interactive Graphics", "Graphics system in which the user can provide input and observe/update the graphical result."],
              ["Raster", "Image representation using a rectangular array of pixels."],
              ["Vector/Geometric representation", "Representation using mathematical descriptions of lines, curves, shapes and objects."]
            ]
          }
        ]
      },
      {
        id: "interactive-graphics",
        title: "2. Interactive Graphics",
        icon: "MousePointer2",
        blocks: [
          {
            kind: "paragraph",
            text: "Interactive graphics allows a user to communicate with a graphical system through input devices and receive visual feedback. A typical interaction cycle is input → processing → graphics generation → display → user observation and further input."
          },
          {
            kind: "diagram",
            diagramId: "c503-interactive-graphics",
            caption: "Basic interaction cycle of an interactive computer-graphics system."
          }
        ]
      },
      {
        id: "interactive-advantages",
        title: "3. Advantages and Uses of Interactive Graphics",
        icon: "Sparkles",
        blocks: [
          {
            kind: "table",
            headers: ["Advantage/Application", "Explanation"],
            rows: [
              ["Design and engineering", "CAD systems allow objects to be created, modified, measured and viewed graphically."],
              ["Scientific visualization", "Large or complex numerical information can be represented visually."],
              ["Education and training", "Animations and simulations can illustrate concepts and procedures."],
              ["Entertainment", "Games, animation, visual effects and digital media use computer graphics extensively."],
              ["User interfaces", "Windows, icons, menus, buttons and other visual controls support interaction."],
              ["Medical visualization", "Graphical representations can help present imaging and other medical data."]
            ]
          }
        ]
      },
      {
        id: "graphics-hardware",
        title: "4. Graphics Hardware Technologies",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "Graphics hardware includes the processing and display components that support image generation and presentation. A graphics system commonly contains a CPU, graphics processor or display processor, frame buffer/memory, display controller and an output display. Input devices such as a mouse, keyboard, scanner or other pointing devices provide user or source data."
          },
          {
            kind: "diagram",
            diagramId: "c503-graphics-system",
            caption: "High-level organization of a computer-graphics system."
          }
        ]
      },
      {
        id: "display-technologies",
        title: "5. Display Technologies",
        icon: "MonitorCog",
        blocks: [
          {
            kind: "paragraph",
            text: "Display technology determines how the graphical output is converted into visible information. The syllabus specifically includes raster-scan display systems, video controllers and random-scan display processors. These represent two important approaches to generating displayed graphics."
          },
          {
            kind: "table",
            headers: ["Technology", "Basic operation"],
            rows: [
              ["Raster scan", "The display is refreshed line by line over a rectangular pixel array."],
              ["Random scan", "The display processor directs the beam to draw specified line segments rather than refreshing every pixel in a fixed raster pattern."],
              ["Video controller", "Controls the timing and data flow required to refresh and drive the display."],
              ["Frame buffer", "Memory holding pixel or display information used to generate the visible image."]
            ]
          }
        ]
      },
      {
        id: "raster-scan-display",
        title: "6. Raster-Scan Display System",
        icon: "Grid3X3",
        blocks: [
          {
            kind: "paragraph",
            text: "In a raster-scan system, the screen is treated as a matrix of pixels. The electron-beam concept used in traditional CRT raster displays scans from one side of the screen to the other, line by line, and returns to the beginning of the next line. Modern flat-panel displays do not use an electron beam, but the raster/pixel-refresh concept remains fundamental to digital displays."
          },
          {
            kind: "diagram",
            diagramId: "c503-raster-scan",
            caption: "Raster scan pattern showing successive horizontal scan lines."
          }
        ]
      },
      {
        id: "video-controller",
        title: "7. Video Controller",
        icon: "Cable",
        blocks: [
          {
            kind: "paragraph",
            text: "A video controller is responsible for reading display information and generating the signals/timing needed to refresh the display. In a simplified raster system, it obtains pixel information from the frame buffer, generates horizontal and vertical synchronization timing and sends the appropriate display data toward the display device."
          }
        ]
      },
      {
        id: "random-scan",
        title: "8. Random-Scan Display Processor",
        icon: "Spline",
        blocks: [
          {
            kind: "paragraph",
            text: "A random-scan display processor, historically associated with vector displays, stores or processes graphical commands describing lines and geometric primitives. Instead of scanning the entire screen in a fixed raster, it directs the display system to draw the required line segments. This approach is well suited to line drawings but does not naturally represent filled, pixel-based imagery as a raster system does."
          },
          {
            kind: "diagram",
            diagramId: "c503-random-scan",
            caption: "Conceptual random-scan/vector display path."
          }
        ]
      },
      {
        id: "image-scanners",
        title: "9. Image Scanners",
        icon: "ScanLine",
        blocks: [
          {
            kind: "paragraph",
            text: "An image scanner is an input device that converts a physical document or image into digital data. It samples the source image and represents the sampled information as pixels. Important concepts include spatial resolution, color depth, sampling and image size. The digitized image can then be stored, processed or displayed by a computer."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Computer Graphics", definition: "Computer-based creation, representation, manipulation and display of visual information." },
      { term: "Interactive Graphics", definition: "Graphics in which users provide input and receive visual feedback during operation." },
      { term: "Pixel", definition: "A picture element representing a sample of an image in a raster display." },
      { term: "Frame Buffer", definition: "Memory containing display/image data used to generate the screen image." },
      { term: "Raster Scan", definition: "Display approach based on refreshing a rectangular pixel array in scan-line order." },
      { term: "Random Scan", definition: "Vector-oriented display approach that draws specified graphical primitives rather than refreshing a complete raster." },
      { term: "Video Controller", definition: "Hardware responsible for display timing and delivery of display data." },
      { term: "Image Scanner", definition: "Input device that digitizes physical images or documents." }
    ],
    examQuestions: [
      "Define computer graphics and explain its major applications. (Long)",
      "Explain interactive graphics and its advantages. (Long)",
      "Explain the basic components of a computer-graphics system with a diagram. (Long)",
      "Explain raster-scan display system with a neat diagram. (Long)",
      "What is a video controller? Explain its role. (Medium)",
      "Explain random-scan display processor. (Medium)",
      "Differentiate raster-scan and random-scan displays. (Long)",
      "Explain image scanners and the concept of image digitization. (Medium)"
    ]
  },

  {
    unitNumber: 2,
    title: "Scan Conversion and Clipping Algorithms",
    hours: 8,
    headings: [
      {
        id: "scan-conversion",
        title: "1. Scan Conversion",
        icon: "ScanLine",
        blocks: [
          {
            kind: "paragraph",
            text: "Scan conversion is the process of converting geometric primitives such as lines, circles and ellipses into a set of pixels suitable for a raster display. The algorithm chooses pixel positions that approximate the ideal mathematical shape while maintaining good visual continuity and efficiency."
          }
        ]
      },
      {
        id: "line-scan-conversion",
        title: "2. Scan Converting Lines",
        icon: "Minus",
        blocks: [
          {
            kind: "paragraph",
            text: "A line-scan conversion algorithm determines which raster pixels should be activated to approximate a mathematical line between two endpoints. The basic requirements are continuity, reasonable accuracy and efficient incremental computation."
          }
        ]
      },
      {
        id: "circle-scan-conversion",
        title: "3. Scan Converting Circles",
        icon: "Circle",
        blocks: [
          {
            kind: "paragraph",
            text: "Circle scan conversion selects pixels that approximate a circle on a raster grid. Because a circle is symmetric, an algorithm can compute points for one portion and reflect them into other symmetric portions, reducing computation."
          },
          {
            kind: "diagram",
            diagramId: "c503-circle-symmetry",
            caption: "Eight-way symmetry used when scan converting a circle."
          }
        ]
      },
      {
        id: "ellipse-scan-conversion",
        title: "4. Scan Converting Ellipses",
        icon: "CircleDashed",
        blocks: [
          {
            kind: "paragraph",
            text: "An ellipse has two principal radii and can be scan converted using incremental decision calculations. Symmetry about the major and minor axes can reduce the number of calculations. The generated pixel pattern should approximate the smooth mathematical curve."
          }
        ]
      },
      {
        id: "line-clipping",
        title: "5. Line Clipping",
        icon: "Crop",
        blocks: [
          {
            kind: "paragraph",
            text: "Line clipping determines which portion of a line segment lies inside a specified clipping window. Portions completely outside the window are rejected, while portions crossing the boundary are shortened to the visible section. Clipping reduces unnecessary drawing operations."
          },
          {
            kind: "diagram",
            diagramId: "c503-line-clipping",
            caption: "A line segment clipped against a rectangular window."
          }
        ]
      },
      {
        id: "point-clipping",
        title: "6. Point Clipping",
        icon: "LocateFixed",
        blocks: [
          {
            kind: "paragraph",
            text: "For a rectangular clipping window, point clipping is straightforward: a point is accepted if its x-coordinate lies between the left and right boundaries and its y-coordinate lies between the bottom and top boundaries. Otherwise it is rejected."
          }
        ]
      },
      {
        id: "cohen-sutherland",
        title: "7. Cohen-Sutherland Line Clipping Algorithm",
        icon: "Scissors",
        blocks: [
          {
            kind: "paragraph",
            text: "Cohen-Sutherland assigns a 4-bit region code to each endpoint of a line relative to a rectangular clipping window. The bits indicate whether the point lies to the left, right, below or above the window. If both codes are zero, the line is trivially accepted. If the bitwise AND of the codes is nonzero, the line is trivially rejected. Otherwise, an intersection with a clipping boundary is calculated and the process is repeated."
          },
          {
            kind: "diagram",
            diagramId: "c503-cohen-sutherland",
            caption: "Cohen-Sutherland region-code concept around a rectangular clipping window."
          },
          {
            kind: "table",
            headers: ["Condition", "Decision"],
            rows: [
              ["code1 OR code2 = 0", "Trivially accept the line."],
              ["code1 AND code2 ≠ 0", "Trivially reject the line."],
              ["Otherwise", "Find an intersection with a relevant boundary and repeat."]
            ]
          }
        ]
      },
      {
        id: "liang-barsky",
        title: "8. Liang-Barsky Line Clipping Algorithm",
        icon: "Waypoints",
        blocks: [
          {
            kind: "paragraph",
            text: "Liang-Barsky represents a line parametrically as P(t) = P1 + t(P2 − P1), where the visible segment corresponds to an interval of t. It uses the inequalities defining the clipping window to calculate entering and leaving parameter values. Compared with Cohen-Sutherland, Liang-Barsky can avoid some repeated intersection calculations because the parametric representation is used directly."
          }
        ]
      },
      {
        id: "midpoint-subdivision",
        title: "9. Midpoint Subdivision Algorithm",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "The midpoint subdivision method recursively subdivides a line segment. If a segment is completely inside, it is accepted; if it is completely outside, it is rejected. Otherwise, the segment is divided at its midpoint and the resulting segments are tested. The process continues until the visible portions can be determined."
          }
        ]
      },
      {
        id: "cyrus-beck",
        title: "10. Cyrus-Beck Algorithm",
        icon: "SquareDashed",
        blocks: [
          {
            kind: "paragraph",
            text: "The Cyrus-Beck algorithm performs line clipping against a convex polygon using a parametric line equation and boundary normals. It determines parameter values where the line enters and leaves the clipping region. The algorithm is more general than algorithms restricted to rectangular windows."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Scan Conversion", definition: "Conversion of geometric primitives into pixels for raster display." },
      { term: "Clipping Window", definition: "Region within which graphical objects or portions are retained for display." },
      { term: "Line Clipping", definition: "Process of retaining only the visible portion of a line inside a clipping region." },
      { term: "Region Code", definition: "Bit code representing the position of a point relative to a rectangular clipping window." },
      { term: "Cohen-Sutherland", definition: "Line clipping algorithm using region codes and trivial accept/reject tests." },
      { term: "Liang-Barsky", definition: "Parametric line clipping algorithm using inequalities for the clipping boundaries." },
      { term: "Midpoint Subdivision", definition: "Recursive line-clipping method based on testing and subdividing at segment midpoints." },
      { term: "Cyrus-Beck", definition: "Parametric line-clipping algorithm for convex polygon clipping regions." }
    ],
    examQuestions: [
      "What is scan conversion? Explain its purpose. (Medium)",
      "Explain line and circle scan conversion. (Long)",
      "Explain eight-way symmetry in circle generation. (Medium)",
      "Explain line clipping and point clipping. (Medium)",
      "Explain Cohen-Sutherland line clipping with region codes and diagram. (Long)",
      "Explain Liang-Barsky line clipping algorithm. (Long)",
      "Explain midpoint subdivision algorithm. (Medium)",
      "Explain Cyrus-Beck line clipping algorithm. (Long)",
      "Compare Cohen-Sutherland and Liang-Barsky algorithms. (Long)"
    ]
  },

  {
    unitNumber: 3,
    title: "Geometrical Transformations in 2D and 3D",
    hours: 8,
    headings: [
      {
        id: "transformation-introduction",
        title: "1. Introduction to Geometrical Transformation",
        icon: "Move3D",
        blocks: [
          {
            kind: "paragraph",
            text: "A geometrical transformation changes the position, orientation, size or shape representation of an object. In computer graphics, transformations are applied to the coordinates of points and vertices. Common 2D transformations are translation, rotation, scaling, reflection and shearing."
          },
          {
            kind: "table",
            headers: ["Transformation", "Main effect"],
            rows: [
              ["Translation", "Moves an object from one position to another."],
              ["Rotation", "Turns an object through a specified angle about a reference point/axis."],
              ["Scaling", "Changes the size of an object."],
              ["Reflection", "Produces a mirror image about a specified line/plane."],
              ["Shearing", "Slants the shape by shifting coordinates proportionally."]
            ]
          }
        ]
      },
      {
        id: "translation",
        title: "2. Translation",
        icon: "Move",
        blocks: [
          {
            kind: "paragraph",
            text: "For a 2D point P(x,y), translation by (tx,ty) gives x' = x + tx and y' = y + ty. Translation changes position without changing the object's shape, size or orientation."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example",
            text: "Point (2,3) translated by (5,−1) becomes (7,2)."
          }
        ]
      },
      {
        id: "rotation",
        title: "3. Rotation",
        icon: "RotateCw",
        blocks: [
          {
            kind: "paragraph",
            text: "For rotation by angle θ about the origin, x' = x cosθ − y sinθ and y' = x sinθ + y cosθ. Positive or negative angle conventions depend on the coordinate convention being used; in the standard Cartesian convention, a positive angle is counterclockwise."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example",
            text: "Rotating (1,0) by 90° counterclockwise about the origin gives (0,1)."
          }
        ]
      },
      {
        id: "scaling",
        title: "4. Scaling",
        icon: "Scaling",
        blocks: [
          {
            kind: "paragraph",
            text: "Scaling changes an object's dimensions. About the origin, x' = sx x and y' = sy y. If sx = sy, uniform scaling preserves proportions. If sx and sy differ, the object is stretched or compressed differently along the two axes."
          }
        ]
      },
      {
        id: "reflection",
        title: "5. Reflection",
        icon: "FlipHorizontal",
        blocks: [
          {
            kind: "paragraph",
            text: "Reflection creates a mirror image. Reflection about the x-axis changes (x,y) to (x,−y), while reflection about the y-axis changes (x,y) to (−x,y). Reflection about the origin changes (x,y) to (−x,−y)."
          }
        ]
      },
      {
        id: "shearing",
        title: "6. Shearing",
        icon: "Skew",
        blocks: [
          {
            kind: "paragraph",
            text: "Shearing changes the shape of an object by shifting one coordinate in proportion to the other. For x-shear, x' = x + shx·y and y' = y. For y-shear, x' = x and y' = y + shy·x. Shearing changes angles and generally changes shape."
          }
        ]
      },
      {
        id: "homogeneous-coordinates",
        title: "7. Homogeneous Coordinates and Transformation Matrices",
        icon: "Grid2X2",
        blocks: [
          {
            kind: "paragraph",
            text: "Homogeneous coordinates represent a 2D point (x,y) as (x,y,1). This permits translation, rotation, scaling, reflection and shearing to be represented uniformly with 3×3 matrices. A point can be represented as a column vector and transformed by matrix multiplication."
          },
          {
            kind: "diagram",
            diagramId: "c503-2d-matrices",
            caption: "Homogeneous-coordinate form of common 2D transformation matrices."
          },
          {
            kind: "table",
            headers: ["Transformation", "Homogeneous matrix"],
            rows: [
              ["Translation", "[[1,0,tx],[0,1,ty],[0,0,1]]"],
              ["Scaling", "[[sx,0,0],[0,sy,0],[0,0,1]]"],
              ["Rotation", "[[cosθ,−sinθ,0],[sinθ,cosθ,0],[0,0,1]]"]
            ]
          }
        ]
      },
      {
        id: "successive-composition",
        title: "8. Successive and Composite Transformations",
        icon: "Combine",
        blocks: [
          {
            kind: "paragraph",
            text: "Multiple transformations can be applied successively. Their matrix product gives a composite transformation. Matrix multiplication is generally not commutative, so changing the order can change the final result. For example, scaling followed by translation is not generally equivalent to translation followed by scaling."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Exam Point",
            text: "Always state the order of transformations when writing a composite transformation. In a column-vector convention, the matrix closest to the point is applied first."
          }
        ]
      },
      {
        id: "window-viewport",
        title: "9. Window-to-Viewport Transformation",
        icon: "PanelTop",
        blocks: [
          {
            kind: "paragraph",
            text: "A window defines the selected region in world coordinates, while a viewport defines the destination region on the display. Window-to-viewport transformation maps coordinates from the world window to the screen viewport, preserving the required scaling and translation relationship."
          },
          {
            kind: "diagram",
            diagramId: "c503-window-viewport",
            caption: "Conceptual mapping from a world-coordinate window to a screen viewport."
          }
        ]
      },
      {
        id: "3d-transformations",
        title: "10. Introduction to 3D Transformations Matrix",
        icon: "Box",
        blocks: [
          {
            kind: "paragraph",
            text: "3D transformations operate on coordinates (x,y,z). Homogeneous coordinates represent a 3D point as (x,y,z,1), allowing transformations to be represented with 4×4 matrices. 3D transformations include translation, scaling and rotations about coordinate axes, as well as other transformations used to position and orient objects in three-dimensional space."
          },
          {
            kind: "diagram",
            diagramId: "c503-3d-axes",
            caption: "3D coordinate axes and a point represented in homogeneous coordinates."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Transformation", definition: "Mathematical operation that changes an object's coordinate representation." },
      { term: "Translation", definition: "Transformation that changes position by adding displacement values." },
      { term: "Rotation", definition: "Transformation that changes orientation by rotating points around a reference point or axis." },
      { term: "Scaling", definition: "Transformation that changes object dimensions." },
      { term: "Reflection", definition: "Transformation that produces a mirror image." },
      { term: "Shearing", definition: "Transformation that slants an object by shifting coordinates proportionally." },
      { term: "Homogeneous Coordinates", definition: "Extended coordinate representation enabling affine transformations to be expressed with matrix multiplication." },
      { term: "Composite Transformation", definition: "Single matrix representing the combined effect of multiple transformations." },
      { term: "Window", definition: "Selected region of world-coordinate space." },
      { term: "Viewport", definition: "Destination region on the display where the window is mapped." }
    ],
    examQuestions: [
      "Define geometrical transformation and explain its types. (Long)",
      "Explain translation, rotation and scaling with equations. (Long)",
      "Explain reflection and shearing with suitable examples. (Long)",
      "What are homogeneous coordinates? Why are they used? (Medium)",
      "Write the matrices for 2D translation, scaling and rotation. (Long)",
      "Explain successive and composite transformations. Why does order matter? (Long)",
      "Explain window-to-viewport transformation with a diagram. (Long)",
      "Explain the basic 3D transformation matrix concept. (Medium)"
    ]
  },

  {
    unitNumber: 4,
    title: "Curves, Surfaces and Solid Modeling",
    hours: 8,
    headings: [
      {
        id: "curves",
        title: "1. Curves in Computer Graphics",
        icon: "Spline",
        blocks: [
          {
            kind: "paragraph",
            text: "Curves provide smooth geometric representations for shapes that cannot be represented conveniently using only straight line segments. Curves are used in computer-aided design, typography, animation paths and object modeling. A curve can be represented parametrically, implicitly or explicitly depending on the mathematical model."
          }
        ]
      },
      {
        id: "polygon-surfaces",
        title: "2. Polygon Surfaces and Polygon Meshes",
        icon: "Triangle",
        blocks: [
          {
            kind: "paragraph",
            text: "A polygon surface is represented using planar polygonal faces. A polygon mesh is a collection of connected vertices, edges and faces used to approximate the surface of a 3D object. Meshes are widely used because they are computationally practical for rendering and modeling."
          },
          {
            kind: "diagram",
            diagramId: "c503-polygon-mesh",
            caption: "Simple polygon mesh showing vertices, edges and faces."
          }
        ]
      },
      {
        id: "quadratic-superquadrics",
        title: "3. Quadratic and Superquadrics",
        icon: "Shapes",
        blocks: [
          {
            kind: "paragraph",
            text: "Quadratic surfaces include mathematically defined surfaces such as spheres, ellipsoids, paraboloids and hyperboloids. Superquadrics extend the family of quadric-like shapes by introducing parameters that control the roundness or squareness of the cross-sections, making them useful for shape modeling."
          }
        ]
      },
      {
        id: "spline-curve",
        title: "4. Spline Curve and Representation",
        icon: "Spline",
        blocks: [
          {
            kind: "paragraph",
            text: "A spline is a smooth curve constructed from polynomial or related segments controlled by a set of points or parameters. Splines provide smooth shape control without requiring a single high-degree polynomial for an entire complex shape. Important ideas include control points, continuity and local/global control depending on the representation."
          },
          {
            kind: "diagram",
            diagramId: "c503-spline-control",
            caption: "Conceptual spline curve controlled by a sequence of control points."
          }
        ]
      },
      {
        id: "solid-modeling",
        title: "5. Solid Modeling",
        icon: "Box",
        blocks: [
          {
            kind: "paragraph",
            text: "Solid modeling represents three-dimensional objects as complete solids rather than only their visible surfaces. A solid model can describe boundaries, volume and relationships between components. The syllabus includes characteristics and representation approaches such as primitive instancing, sweep representations, boundary representations and constructive solid geometry."
          }
        ]
      },
      {
        id: "primitive-instancing",
        title: "6. Primitive Instancing",
        icon: "Boxes",
        blocks: [
          {
            kind: "paragraph",
            text: "Primitive instancing creates complex objects from predefined geometric primitives such as cubes, spheres, cylinders and cones, together with transformations and parameters. An instance refers to a reusable primitive definition with its own position, orientation and scale."
          }
        ]
      },
      {
        id: "sweep-representations",
        title: "7. Sweep Representations",
        icon: "Route",
        blocks: [
          {
            kind: "paragraph",
            text: "A sweep representation creates a 3D object by moving a 2D profile along a path. Depending on the operation, the profile may be translated, rotated or scaled as it moves. Sweeps are useful for pipes, rods, rails and many elongated manufactured forms."
          }
        ]
      },
      {
        id: "boundary-representation",
        title: "8. Boundary Representation (B-rep)",
        icon: "PanelsTopLeft",
        blocks: [
          {
            kind: "paragraph",
            text: "Boundary representation describes a solid through its boundary elements, typically vertices, edges and faces, together with their connectivity and geometric information. The representation captures the surface enclosing the solid."
          },
          {
            kind: "diagram",
            diagramId: "c503-brep",
            caption: "Boundary representation concept using vertices, edges and faces."
          }
        ]
      },
      {
        id: "constructive-solid-geometry",
        title: "9. Constructive Solid Geometry (CSG)",
        icon: "GitMerge",
        blocks: [
          {
            kind: "paragraph",
            text: "Constructive Solid Geometry represents complex solids as combinations of simpler solid primitives using Boolean operations. The fundamental operations are union, intersection and difference. A CSG model can therefore be represented as a tree whose leaves are primitives and whose internal nodes are Boolean operations."
          },
          {
            kind: "diagram",
            diagramId: "c503-csg",
            caption: "CSG tree and Boolean operations on simple solid primitives."
          }
        ]
      },
      {
        id: "spatial-partitioning",
        title: "10. Spatial Partitioning Representations",
        icon: "Grid2X2",
        blocks: [
          {
            kind: "paragraph",
            text: "Spatial partitioning divides space into regions so that objects and their relationships can be represented or processed efficiently. The syllabus includes cell decomposition, enumeration of space (spatial occupancy) and octree representation."
          },
          {
            kind: "table",
            headers: ["Representation", "Basic idea"],
            rows: [
              ["Cell decomposition", "Divide space into cells and describe which cells are occupied or relevant."],
              ["Spatial enumeration", "Represent occupancy or object information by enumerating spatial regions/cells."],
              ["Octree", "Recursively divide 3D space into eight subregions when greater detail is needed."]
            ]
          }
        ]
      },
      {
        id: "octree",
        title: "11. Octree Representation",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "An octree is a hierarchical spatial data structure for 3D space. A region can be recursively subdivided into eight octants. Subdivision continues only where additional spatial detail is required, making the representation useful for objects with non-uniform occupancy."
          },
          {
            kind: "diagram",
            diagramId: "c503-octree",
            caption: "Conceptual octree subdivision of 3D space."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Polygon Mesh", definition: "Connected collection of polygonal faces represented through vertices, edges and faces." },
      { term: "Spline", definition: "Smooth curve representation constructed from connected curve segments controlled by parameters or control points." },
      { term: "Solid Modeling", definition: "Representation of complete three-dimensional solids, including their boundaries and volume." },
      { term: "Primitive Instancing", definition: "Construction of objects using reusable predefined geometric primitives." },
      { term: "Sweep", definition: "Creation of a 3D object by moving a profile along a path." },
      { term: "B-rep", definition: "Boundary representation describing a solid through its vertices, edges and faces." },
      { term: "CSG", definition: "Constructive Solid Geometry using Boolean operations on solid primitives." },
      { term: "Cell Decomposition", definition: "Spatial representation obtained by dividing space into cells." },
      { term: "Octree", definition: "Hierarchical 3D spatial representation that recursively divides a region into eight subregions." }
    ],
    examQuestions: [
      "Explain polygon surfaces and polygon meshes. (Long)",
      "Write a note on quadratic surfaces and superquadrics. (Medium)",
      "Explain spline curves and their representation. (Long)",
      "Define solid modeling and explain its characteristics. (Long)",
      "Explain primitive instancing and sweep representation. (Medium)",
      "Explain boundary representation with a diagram. (Long)",
      "Explain constructive solid geometry and Boolean operations. (Long)",
      "Explain spatial partitioning representations. (Medium)",
      "Explain octree representation with a diagram. (Long)"
    ]
  },

  {
    unitNumber: 5,
    title: "Computer Animation",
    hours: 8,
    headings: [
      {
        id: "animation-introduction",
        title: "1. Introduction to Computer Animation",
        icon: "Clapperboard",
        blocks: [
          {
            kind: "paragraph",
            text: "Computer animation is the creation of a sequence of graphical states or frames that produces the perception of movement. Animation can be generated by changing an object's position, orientation, shape, appearance or other properties over time. The final sequence may be rendered as frames for playback or displayed interactively."
          },
          {
            kind: "diagram",
            diagramId: "c503-animation-pipeline",
            caption: "Basic computer-animation pipeline from scene data through frame generation to playback."
          }
        ]
      },
      {
        id: "applications-animation",
        title: "2. Applications of Animation",
        icon: "Presentation",
        blocks: [
          {
            kind: "table",
            headers: ["Application", "Example use"],
            rows: [
              ["Entertainment", "Films, games, visual effects and animated media."],
              ["Education", "Demonstrating processes, concepts and simulations."],
              ["Engineering", "Showing mechanisms, assembly and motion."],
              ["Scientific visualization", "Representing changing physical or numerical phenomena."],
              ["Training and simulation", "Interactive or recorded simulations of procedures and environments."]
            ]
          }
        ]
      },
      {
        id: "morphing",
        title: "3. Morphing",
        icon: "Blend",
        blocks: [
          {
            kind: "paragraph",
            text: "Morphing is an animation technique in which one shape or image is gradually transformed into another. The transformation can involve corresponding points or features so that intermediate states appear as a continuous change. In graphical shape morphing, the correspondence between source and destination geometry is important for obtaining a meaningful result."
          },
          {
            kind: "diagram",
            diagramId: "c503-morphing",
            caption: "Conceptual sequence of source shape, intermediate shapes and destination shape."
          }
        ]
      },
      {
        id: "keyframe-system",
        title: "4. Keyframe System",
        icon: "Film",
        blocks: [
          {
            kind: "paragraph",
            text: "In keyframe animation, the animator specifies important states at selected times called keyframes. The system determines or assists in generating intermediate states between keyframes. Keyframes can specify position, rotation, scale, shape or other properties."
          },
          {
            kind: "diagram",
            diagramId: "c503-keyframe",
            caption: "Keyframes and intermediate frames along a time sequence."
          }
        ]
      },
      {
        id: "interpolation",
        title: "5. Interpolation and Motion Specification",
        icon: "ChartSpline",
        blocks: [
          {
            kind: "paragraph",
            text: "Interpolation estimates intermediate values between specified animation states. For a scalar property, linear interpolation can be expressed as P(t) = (1−u)P0 + uP1, where u ranges from 0 to 1. More advanced interpolation functions can produce smoother or intentionally varied motion."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Simple Example",
            text: "If an object moves from x=10 at the start to x=30 at the end and u=0.5, linear interpolation gives x=20."
          }
        ]
      },
      {
        id: "types-animation",
        title: "6. Types of Animation",
        icon: "Layers3",
        blocks: [
          {
            kind: "paragraph",
            text: "Animation can be organized according to how motion and graphical changes are generated. Common academic categories include keyframe animation, procedural/algorithmic animation, path-based motion and morphing. The exact category used depends on the animation system and the property being animated."
          }
        ]
      },
      {
        id: "sequencing-animation",
        title: "7. Sequencing of Animation Design",
        icon: "ListVideo",
        blocks: [
          {
            kind: "paragraph",
            text: "Animation sequencing determines the order and timing of scenes, actions and transitions. A sequence normally specifies the initial state, events or actions, timing/duration, intermediate states and final state. Good sequencing maintains temporal continuity and ensures that dependent actions occur in the correct order."
          },
          {
            kind: "diagram",
            diagramId: "c503-animation-sequencing",
            caption: "Timeline-oriented view of animation sequencing."
          }
        ]
      },
      {
        id: "fundamental-animation-principles",
        title: "8. Fundamental Principles of Animation",
        icon: "WandSparkles",
        blocks: [
          {
            kind: "paragraph",
            text: "Animation design uses principles that make movement understandable and visually effective. Important principles include timing, spacing, anticipation, follow-through, overlapping action, exaggeration where appropriate, and smooth transitions. Timing controls how long an action takes; spacing controls how far an object moves between successive frames."
          },
          {
            kind: "table",
            headers: ["Principle", "Purpose"],
            rows: [
              ["Timing", "Controls duration and perceived speed of an action."],
              ["Spacing", "Controls the positional change between frames."],
              ["Anticipation", "Prepares the viewer for an upcoming major action."],
              ["Follow-through", "Represents continuation of motion after the main action."],
              ["Overlapping action", "Allows different parts/actions to change at slightly different times."],
              ["Exaggeration", "Emphasizes an action or expression when stylistically appropriate."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Animation", definition: "Creation of perceived motion by presenting a sequence of changing graphical states." },
      { term: "Frame", definition: "A single image/state in an animation sequence." },
      { term: "Morphing", definition: "Gradual transformation of one shape or image into another." },
      { term: "Keyframe", definition: "Important specified state at a particular time in an animation." },
      { term: "Interpolation", definition: "Calculation of intermediate values between specified states." },
      { term: "Sequencing", definition: "Organization of actions, scenes and timing in an animation." },
      { term: "Timing", definition: "Control of the duration and temporal rate of an animated action." },
      { term: "Spacing", definition: "Control of positional differences between successive animation frames." }
    ],
    examQuestions: [
      "Define computer animation and explain its applications. (Long)",
      "Explain morphing with a suitable diagram. (Long)",
      "Explain the keyframe system. (Long)",
      "What is interpolation? Explain with an example. (Medium)",
      "Explain types of animation. (Medium)",
      "Explain sequencing of animation design. (Long)",
      "Explain fundamental principles of animation, especially timing and spacing. (Long)"
    ]
  }
];
