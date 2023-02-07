import NextHead from 'next/head';
import { appConfig } from '../../configs/app';

export default function Head({ title, description, image, url, type, video, breadcrumbs }) {
	description = description || appConfig.description;

	let jsonLd = {
		'@context': 'https://schema.org',
		name: title || appConfig.name,
		description: description.substring(0, 30),
	};

	if (image) {
		jsonLd.image = image;
	}

	let breadcrumb = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: appConfig.name,
				item: appConfig.url,
			},
		],
	};

	if (breadcrumbs?.length) {
		breadcrumbs?.forEach(({ title, url }, i) => {
			breadcrumb.itemListElement.push({
				'@type': 'ListItem',
				position: i + 2,
				name: title,
				item: appConfig.url + url,
			});
		});
	}

	return (
		<NextHead>
			<title>{title ? title : `${appConfig.name}`}</title>
			<meta name="description" content={description.substring(0, 30)} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description.substring(0, 30)} />
			<meta property="og:type" content={type || 'website'} />
			<meta property="og:url" content={url || appConfig.url} />
			<meta property="og:locale" content="id_ID" />
			<meta property="og:site_name" content={appConfig.name} />
			{image && <meta property="og:image" content={Array.isArray(image) ? image[0] : image} />}
			{video && <meta property="og:video" content={video} />}

			{jsonLd && (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }} />
			)}
			{breadcrumb && (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb, null, 2) }} />
			)}
		</NextHead>
	);
}
