# SaaS Email Newsletter

This project is a SaaS email newsletter application built using Next.js. It features user authentication with Clerk, payment processing with Stripe, and includes analytics for clients. Additionally, it checks email validity before adding to the subscribers' list.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **User Authentication**: Secure authentication using Clerk.
- **Payment Processing**: Integrated with Stripe for subscription plans.
- **Email Validation**: Checks if the email is valid before adding to the subscribers' list.
- **Analytics**: Provides analytics for subscriber data.
- **Newsletter Management**: Create, design, and send newsletters to subscribers.

## Technology Stack

- **Frontend**: Next.js, TailwindCSS
- **Authentication**: Clerk
- **Payments**: Stripe
- **Database**: Datastax Astra
- **Email Validation**: Zerobounce

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/dchobarkar/saas-email-newsletter.git
cd saas-email-newsletter
npm install
```

## Running the Project

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```plaintext
NEXT_PUBLIC_WEBSITE_URL=<your-website-url>
JWT_SECRET_KEY=<your-jwt-secret-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
GROW_MONTHLY=<your-stripe-payment-url-for-grow-monthly-plan>
GROW_YEARLY=<your-stripe-payment-url-for-grow-yearly-plan>
SCALE_MONTHLY=<your-stripe-payment-url-for-scale-monthly-plan>
SCALE_YEARLY=<your-stripe-payment-url-for-scale-yearly-plan>
ASTRA_DB_API_ENDPOINT=<your-astra-database-api-endpoint>
ASTRA_DB_APPLICATION_TOKEN=<your-astra-database-app-token>
ZEROBOUNCE_API_KEY=<your-zerobounce-api-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-frontend-api>
AWS_ACCESS_KEY_ID=<your-aws-access-key>
AWS_SECRET_KEY_ID=<your-aws-secret-key>
AWS_REGION=<your-aws-region>
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

Contributions to this project are welcome. Follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## Contact

Darshan Chobarkar - [@dchobarkar](https://www.linkedin.com/in/dchobarkar/) - [@barbatos\_\_08](https://twitter.com/barbatos__08) - contact@darshanwebdev.com

Project Link: [https://github.com/dchobarkar/saas-email-newsletter](https://github.com/dchobarkar/saas-email-newsletter)
