import { AvoContainer } from '@/components'
import DB from '@database'

interface IProps {
  productList: TProduct[]
}

function Home({ productList }: IProps) {
  /*
  Auto-DDoS / Client Side Rendered:

  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => { window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data)
      })
  }, [])
  */

  return (
    <>
      <AvoContainer avos={productList} />
    </>
  )
}

export default Home

// getStaticProps vs getServerSideProps
export async function getStaticProps() {
  const db = new DB()
  const productList = await db.getAll()

  return {
    props: {
      productList
    }
  }
}
