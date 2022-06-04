import React, { useEffect, useState } from 'react'
import { Category } from "../Category";
import { List, Item } from "./styles";

import data from '../../../api/db.json'

function useCategoriesData () {
  const [categories, setCategories] = useState(data.categories)
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch((error)=>{
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfcategories = () => {

  const { categories, loading } = useCategoriesData() 
  const [showFixed, setShowFixed] = useState(false)
 
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

   const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      } 
    </List>
  )
  return (
    <>
      {renderList()} 
      {showFixed && renderList(true)} 
    </>
  );
};