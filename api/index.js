export default function (req, res, next) {
	res.setHeader('X-Frame-Options', 'DENY');
	next()
  }