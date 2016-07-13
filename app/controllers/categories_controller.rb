class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :edit, :update, :destroy]

  # GET /categories
  # GET /categories.json
  def index
    if current_user.role.rights.where(value: "create_employee").blank?
      redirect_to root_path, alert: "Sorry! You are not authorized"
    end
    @categories = Category.all
  end

  # GET /categories/1
  # GET /categories/1.json
  def show
    if current_user.role.rights.where(value: "create_employee").blank?
      redirect_to root_path, alert: "Sorry! You are not authorized"
    end
  end

  # GET /categories/new
  def new
    if current_user.role.rights.where(value: "create_employee").blank?
      redirect_to root_path, alert: "Sorry! You are not authorized"
    end
    @category = Category.new
  end

  # GET /categories/1/edit
  def edit
    if current_user.role.rights.where(value: "create_employee").blank?
      redirect_to root_path, alert: "Sorry! You are not authorized"
    end
  end

  # POST /categories
  # POST /categories.json
  def create
    @category = Category.new(category_params)

    respond_to do |format|
      if @category.save
        format.html { redirect_to categories_path, notice: 'Category was successfully created.' }
        format.json { render :show, status: :created, location: @category }
      else
        format.html { render :new }
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /categories/1
  # PATCH/PUT /categories/1.json
  def update
    respond_to do |format|
      if @category.update(category_params)
        format.html { redirect_to categories_path, notice: 'Category was successfully updated.' }
        format.json { render :show, status: :ok, location: @category }
      else
        format.html { render :edit }
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /categories/1
  # DELETE /categories/1.json
  def destroy
    @category.destroy
    respond_to do |format|
      format.html { redirect_to categories_path, notice: 'Category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def category_params
      params.require(:category).permit(:name, :prefix)
    end
end
