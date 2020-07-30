import Head from 'next/head'
import { useRouter } from 'next/router'

const meta = (props) => {
	const router = useRouter()
	const canonical =
		(props.canonical || process.env.NEXT_PUBLIC_BASE_URL) + router.route

	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<title>{props.title}</title>
			<meta name="description" content={props.desc} />
			<link rel="canonical" href={canonical} />
			{/* og */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.desc} />
			<meta property="og:site_name" content="Istvan Kreisz" />
			<meta
				property="og:image"
				content={`${
					process.env.NEXT_PUBLIC_BASE_URL +
					'/' +
					(props.image || 'images/thumbnailImageFacebook.png')
				}`}
			/>
			<meta property="og:url" content={`${canonical}`} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="627" />
			{/* twitter */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={props.title} />
			<meta name="twitter:description" content={props.desc} />
			<meta name="twitter:site" content="@IKreisz" />
			<meta name="twitter:creator" content="@IKreisz" />
			<meta
				property="twitter:image"
				content={`${
					process.env.NEXT_PUBLIC_BASE_URL +
					'/' +
					(props.image || 'images/thumbnailImageTwitter.png')
				}`}
			/>
		</Head>
	)
}
export default meta
