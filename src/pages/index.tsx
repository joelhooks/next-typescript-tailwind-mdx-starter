import {jsx} from '@emotion/core'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <Head>
        <title>Next.js, TypeScript, Tailwind, Jest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1
        className="
      col-span-full
      grid-flow-col
      text-3xl
      text-green-700"
        css={{backgroundColor: 'black'}}
      >
        Welcome to Your App
      </h1>

      <div
        className="
      grid
      sm:grid-cols-3
      gap-2
      col-span-1
      content-center
      grid-cols-1
      "
      >
        <div className="col-span-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          eleifend mi in nulla posuere sollicitudin aliquam. Nulla at volutpat
          diam ut venenatis tellus in metus. Pretium fusce id velit ut tortor.
          Orci porta non pulvinar neque laoreet suspendisse interdum consectetur
          libero. Donec adipiscing tristique risus nec feugiat in fermentum
          posuere urna. Eu facilisis sed odio morbi quis. Erat imperdiet sed
          euismod nisi porta lorem. Ligula ullamcorper malesuada proin libero.
          Eget duis at tellus at urna condimentum. Aliquam vestibulum morbi
          blandit cursus risus at ultrices. Tincidunt dui ut ornare lectus sit
          amet est. Nulla facilisi morbi tempus iaculis urna id volutpat. Donec
          ultrices tincidunt arcu non sodales neque. Vulputate sapien nec
          sagittis aliquam. Neque ornare aenean euismod elementum nisi quis
          eleifend quam adipiscing. Eget dolor morbi non arcu risus. Lacus
          suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
          Iaculis at erat pellentesque adipiscing commodo elit at. Nec nam
          aliquam sem et tortor consequat id.
        </div>
        <div
          className="
        grid-flow-col
        col-span-2"
        >
          Lobortis feugiat vivamus at augue. Aliquet nec ullamcorper sit amet
          risus nullam eget felis eget. Velit egestas dui id ornare arcu odio ut
          sem nulla. Lacinia at quis risus sed. Varius sit amet mattis vulputate
          enim. Vitae congue eu consequat ac felis donec et odio. Elementum
          tempus egestas sed sed. Aliquam eleifend mi in nulla posuere
          sollicitudin. Ultrices mi tempus imperdiet nulla malesuada
          pellentesque elit. At augue eget arcu dictum varius. Nibh ipsum
          consequat nisl vel pretium. Aliquam faucibus purus in massa tempor nec
          feugiat nisl pretium. Dictum fusce ut placerat orci nulla
          pellentesque. Nec tincidunt praesent semper feugiat nibh sed pulvinar.
          Ut tristique et egestas quis ipsum. Ultrices mi tempus imperdiet nulla
          malesuada pellentesque. Sapien nec sagittis aliquam malesuada bibendum
          arcu vitae. Elementum eu facilisis sed odio morbi quis commodo. Odio
          ut enim blandit volutpat maecenas volutpat blandit.
        </div>
      </div>
      <div
        className="
        inset-x-0
        bottom-0
        col-span-full
        text-3xl
        text-green-700
        "
        css={{backgroundColor: 'black'}}
      >
        This is a footer
      </div>
    </div>
  )
}
