class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user
  before_action :ensure_logged_in

  private
  def current_user
    return nil unless session[:user_id]
    @current_user ||= User.find(session[:user_id])
  end

  def ensure_logged_in
    redirect_to login_url unless current_user
  end

  def ensure_not_logged_in
    redirect_to '/' if current_user
  end

  def login(user)
    session[:user_id] = user.id
    @current_user = user
  end

  def logout
    session[:user_id] = nil
    @current_user = nil
  end
end
