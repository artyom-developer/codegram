import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

import { Layout } from '../components/Layout'

export const Home = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

// export const Home = ({ categoryId }) => {
//   return (
//     <Fragment>
//       <ListOfCategories />
//       <ListOfPhotoCards categoryId={categoryId} />
//     </Fragment>
//   )
// }