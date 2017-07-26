module UsersHelper
  def user_has_posts_comments
    user.posts && user.comments && user.favorites
  end
end
