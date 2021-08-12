class UsersController < ApplicationController
  def create
    user = User.new(user_register_params)
    if user.save
      token = create_token(user.id)
      render json: {
        user: user.attributes.except('password_digest'),
        token: token
      }, status: :created
    else
      render json: user.errors, status: 422
    end
  end

  # CUSTOM METHODS
  # POST /users/login
  def login
    user = User.find_by(username: user_login_params[:username])

    if user && user.authenticate(user_login_params[:password])
      token = create_token(user.id)
      render json: {
        user: user.attributes.except('password_digest'),
        token: token
      }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def user_register_params
    params.require(:user).permit(:username, :password)
  end

  def user_login_params
    params.require(:user).permit(:username, :password)
  end

  def create_token(user_id)
    payload = { id: user_id, exp: 24.hours.from_now.to_i }
    JWT.encode(payload, SECRET_KEY)
  end
end
