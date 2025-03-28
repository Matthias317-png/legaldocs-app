# Deployment Checklist

## Pre-deployment Tasks

### Environment Setup
- [ ] Update `.env.production` with actual production values
- [ ] Ensure all API keys are valid and have proper permissions
- [ ] Set up production database and update DATABASE_URL
- [ ] Configure production domain in NEXTAUTH_URL

### Database
- [ ] Run database migrations:
  ```bash
  npx prisma migrate deploy
  ```
- [ ] Generate Prisma Client:
  ```bash
  npx prisma generate
  ```

### Build
- [ ] Run type checking:
  ```bash
  npm run type-check
  ```
- [ ] Run linting:
  ```bash
  npm run lint
  ```
- [ ] Build the application:
  ```bash
  npm run build
  ```

## Deployment Steps

### Server Setup
- [ ] Set up Node.js environment (v18 or higher)
- [ ] Install PM2 or similar process manager
- [ ] Configure Nginx or similar web server
- [ ] Set up SSL certificates

### Application Deployment
- [ ] Copy built files to production server
- [ ] Install production dependencies:
  ```bash
  npm ci --production
  ```
- [ ] Start the application:
  ```bash
  npm start
  ```

### Post-deployment Tasks
- [ ] Verify all routes are working
- [ ] Test authentication flow
- [ ] Verify database connections
- [ ] Check Stripe integration
- [ ] Monitor error logs
- [ ] Set up monitoring and alerting

## Rollback Plan
1. Keep previous version backup
2. Document database state
3. Prepare rollback scripts
4. Test rollback procedure

## Monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure performance monitoring
- [ ] Set up uptime monitoring
- [ ] Configure log aggregation

## Security
- [ ] Enable HTTPS
- [ ] Configure security headers
- [ ] Set up rate limiting
- [ ] Enable CSP (Content Security Policy)
- [ ] Configure CORS properly 