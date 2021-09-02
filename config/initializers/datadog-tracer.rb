Datadog.configure do |c|
  c.use :rails, service_name: 'heroku-app'
  # c.env = 'portfolio-api'
  # c.service = 'heroku-app'
end
